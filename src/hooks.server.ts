import { json, text, type Handle } from '@sveltejs/kit';

/**
 * CSRF protection copied from sveltekit but with the ability to turn it off for specific routes.
 */
const csrf =
	(allowedPaths: string[]): Handle =>
	async ({ event, resolve }) => {
		const forbidden =
			event.request.method === 'POST' &&
			event.request.headers.get('origin') !== event.url.origin &&
			isFormContentType(event.request) &&
			!allowedPaths.includes(event.url.pathname);

		if (forbidden) {
			const message = `Cross-site ${event.request.method} form submissions are forbidden`;
			if (event.request.headers.get('accept') === 'application/json') {
				return json({ message }, { status: 403 });
			}
			return text(message, { status: 403 });
		}

		return resolve(event);
	};
function isContentType(request: Request, ...types: string[]) {
	const type = request.headers.get('content-type')?.split(';', 1)[0].trim() ?? '';
	return types.includes(type);
}
function isFormContentType(request: Request) {
	return isContentType(request, 'application/x-www-form-urlencoded', 'multipart/form-data');
}

export const handle = csrf(['/api/slack/interaction']);
