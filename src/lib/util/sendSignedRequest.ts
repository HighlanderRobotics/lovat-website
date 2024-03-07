import { LOVAT_API_BASE, LOVAT_SIGNING_KEY } from '$env/static/private';
import { createHmac } from 'crypto';

export async function sendSignedRequest(path: string, method: string, body: string) {
	const timestamp = Math.floor(Date.now() / 1000);
	const signature = createHmac('sha256', LOVAT_SIGNING_KEY)
		.update(
			JSON.stringify({
				path,
				method,
				body,
				timestamp
			})
		)
		.digest('hex');

	const response = await fetch(`${LOVAT_API_BASE}${path}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
			'X-Signature': signature,
			'X-Timestamp': timestamp.toString()
		},
		body
	});

	if (response.status === 401) {
		console.log(`Failed to send signed request: ${response.status} ${await response.text()}`);
		throw new Error('Failed to send signed request');
	}

	return response;
}
