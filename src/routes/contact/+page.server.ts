import type { Actions } from './$types';
import { env } from '$env/dynamic/private';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()

        const name = data.get('name');
        const email = data.get('email');
        const team = data.get('team');
        const message = data.get('message');

        const body = {
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Received a new submission from the website contact form."
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `*Name*\n${name}\n\n*Email*\n${email}\n\n*Team Number*\n${team || '_None_'}\n\n*Message*\n${message}`
                    }
                },
                {
                    "type": "actions",
                    "elements": [
                        {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Reply",
                                "emoji": true
                            },
                            "url": "mailto:" + encodeURIComponent(email?.toString() || 'null'),
                        }
                    ]
                }
            ]
        }

        if (env.SLACK_WEBHOOK == null) {
            throw error(500, "We weren't able to get your message through.");
        }

        const response = await fetch(env.SLACK_WEBHOOK, {
            method: "POST",
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            console.log(`Received an error from Slack when attempting to POST to the webhook:
            ${response.status} ${response.statusText}
            ${response.body}`);
            throw error(500, "We weren't able to get your message through.");
        }

        throw redirect(303, '/contact/success');
    },
} satisfies Actions;