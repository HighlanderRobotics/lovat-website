import type { Actions } from './$types';
import { env } from '$env/dynamic/private';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');

		if (env.RESEND_KEY == null) {
			throw error(500, "We weren't able to sign you up.");
		}

		console.log('Sending email to ' + email);

		const response = await fetch(
			'https://api.resend.com/audiences/efdae99e-d819-41a8-8373-041db3873707/contacts',
			{
				method: 'post',
				headers: {
					Authorization: 'Bearer ' + env.RESEND_KEY,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email,
					unsubscribed: false
				})
			}
		);

		if (!response.ok) {
			console.log(
				`Received an error when attempting to POST to the webhook: ${await response.text()}`
			);
			throw error(500, "We weren't able to sign you up.");
		}

		throw redirect(303, '/get-updates/success');
	}
} satisfies Actions;
