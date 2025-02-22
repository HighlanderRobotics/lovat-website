
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	throw redirect(301, 'https://lovat-learn.highlanderrobotics.com/guides/welcome');
};