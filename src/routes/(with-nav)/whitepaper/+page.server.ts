import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	throw redirect(
		307,
		'https://docs.google.com/document/d/1dwBV2D_n_CE62xlOW9997xGdaEdXu04mVXeAho9EgnY/preview'
	);
};
