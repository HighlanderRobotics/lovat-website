import type { Actions } from './$types';
import { env } from '$env/dynamic/private';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()

        const name = data.get('name');
        const team = data.get('team');
        const email = data.get('email');

        if (!name) throw error(400, "Name is required.");
        if (!team) throw error(400, "Team number is required.");
        if (!email) throw error(400, "Email is required.");

        const body = {
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Somebody requested to delete their account on Lovat Collection"
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `*Name*\n${name}\n\n*Email*\n${email}\n\n*Team Number*\n${team || '_None_'}`
                    }
                },
            ]
        }

        if (env.SLACK_WEBHOOK == null) {
            throw error(500, "We weren't able to submit your request.");
        }

        const response = await fetch(env.SLACK_WEBHOOK, {
            method: "POST",
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            console.log(`Received an error from Slack when attempting to POST to the webhook:
            ${response.status} ${response.statusText}
            ${response.body}`);
            throw error(500, "We weren't able to submit your request.");
        }

        throw redirect(303, '/collection/delete-my-account/success');
    },
} satisfies Actions;