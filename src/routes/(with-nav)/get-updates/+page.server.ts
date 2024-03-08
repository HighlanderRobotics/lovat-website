import type { Actions } from './$types';
import { env } from '$env/dynamic/private';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const team = data.get('team');

		const body = {
			email: email,
			teamNumber: team
		};

		if (env.WAITLIST_WEBHOOK == null) {
			throw error(500, "We weren't able to sign you up.");
		}

		const response = await fetch(env.WAITLIST_WEBHOOK, {
			method: 'POST',
			body: JSON.stringify(body)
		});

		if ((await response.text()) !== 'Waitlist item recorded.') {
			console.log(`Received an error when attempting to POST to the webhook: ${response.body}`);
			throw error(500, "We weren't able to sign you up.");
		}

		throw redirect(303, '/get-updates/success');
	}
} satisfies Actions;
