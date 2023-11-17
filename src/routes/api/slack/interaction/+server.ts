import { error, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SLACK_SIGNING_SECRET } from '$env/static/private';
import { createHmac } from 'crypto';

export const POST: RequestHandler = async (event) => {
    const textRequest = await event.request.clone();
    const formData = await event.request.formData();
    const payload = formData.get('payload');

    if (payload === null) {
        throw error(400, 'Missing payload');
    }

    if (typeof payload !== 'string') {
        throw error(400, 'Invalid payload');
    }

    const requestTimestamp = event.request.headers.get('X-Slack-Request-Timestamp');
    const slackSignature = event.request.headers.get('X-Slack-Signature');

    if (!requestTimestamp || !slackSignature) {
        throw error(400, 'Missing headers');
    }

    // Validate request timestamp
    const now = Math.floor(Date.now() / 1000);
    if (Math.abs(now - parseInt(requestTimestamp)) > 60 * 5) {
        throw error(400, 'Outdated request');
    }

    const baseString = `v0:${requestTimestamp}:${await textRequest.text()}`;

    // Validate signature
    const hmac = createHmac('sha256', SLACK_SIGNING_SECRET);
    hmac.update(baseString);
    const signature = `v0=${hmac.digest('hex')}`;

    if (signature !== slackSignature) {
        throw error(500, 'Invalid signature');
    }

    return text('ok');
};
