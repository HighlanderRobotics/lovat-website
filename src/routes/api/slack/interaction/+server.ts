import { error, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SLACK_SIGNING_SECRET } from '$env/static/private';
import { createHmac } from 'crypto';
import { sendSignedRequest } from '$lib/util/sendSignedRequest';

export const POST: RequestHandler = async (event) => {
    const textRequest = await event.request.clone();
    const formData = await event.request.formData();
    const payloadString = formData.get('payload');

    if (payloadString === null) {
        throw error(400, 'Missing payload');
    }

    if (typeof payloadString !== 'string') {
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

    const payload = JSON.parse(payloadString);

    if (payload.type === 'block_actions' && payload.actions !== undefined) {
        for (let i = 0; i < payload.actions.length; i++) {
            const action = payload.actions[i];
            
            switch (action.action_id) {
                case 'verify_action':
                    try {
                        await handleApproveAction(action);
                        return text('ok');
                    } catch (e) {
                        console.log(e);
                        throw error(500, 'Failed to approve team');
                    }
                case 'reject_action':
                    try {
                        await handleRejectAction(action);
                        return text('ok');
                    } catch (e) {
                        console.log(e);
                        throw error(500, 'Failed to reject team');
                    }
                default:
                    console.log(`Received unknown action from Slack: ${action.action_id}`);
                    return text('ok');
            }
        }
    }

    return text('ok');
};

async function handleApproveAction(action: { value: string; }) {
    const team = parseInt(action.value.split('_')[1]);

    if (isNaN(team)) {
        console.log('Invalid team number');
        return;
    }
    
    await sendSignedRequest(`/v1/manager/registeredteams/${team}/approve`, 'POST', '');

    console.log(`Team ${team} approved successfully`);
}

async function handleRejectAction(action: { value: string; }) {
    const team = parseInt(action.value.split('_')[1]);

    if (isNaN(team)) {
        console.log('Invalid team number');
        return;
    }
    
    await sendSignedRequest(`/v1/manager/registeredteams/${team}/reject`, 'POST', '');

    console.log(`Team ${team} rejected successfully`);
}
