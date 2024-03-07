import type { PageServerLoad } from './$types';
import { UAParser } from 'ua-parser-js';
import QRCode from 'qrcode';

export const load: PageServerLoad = async ({ request, url }) => {
	let deviceType: 'other' | 'ios' | 'android' = 'other';
	let qrCode = '';

	const ua = request.headers.get('user-agent');

	if (ua) {
		const parser = new UAParser(ua);
		const userAgent = parser.getResult();

		if (['mobile', 'tablet'].includes(userAgent.device.type || '')) {
			if (userAgent.os.name === 'iOS') deviceType = 'ios';
			if (userAgent.os.name?.includes('Android')) deviceType = 'android';
		}
	}

	if (deviceType === 'other') {
		qrCode = await QRCode.toDataURL(url.origin + '/collection/download');
	}

	return {
		deviceType,
		qrCode
	};
};
