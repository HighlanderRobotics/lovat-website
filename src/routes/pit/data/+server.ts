import { getPitData } from '$lib/util/getPitData';
import { z } from 'zod';

export async function GET({ url }) {
	const queryParams = z
		.object({
			tournamentKey: z.string(),
			team: z.string().refine((value) => !isNaN(parseInt(value))),
			queueMatchCount: z.string().refine((value) => !isNaN(parseInt(value))),
			topTeamCount: z.string().refine((value) => !isNaN(parseInt(value))),
			teamsAboveCount: z.string().refine((value) => !isNaN(parseInt(value)))
		})
		.parse(Object.fromEntries(url.searchParams.entries()));

	const { tournamentKey } = queryParams;
	const team = parseInt(queryParams.team);
	const queueMatchCount = parseInt(queryParams.queueMatchCount);
	const topTeamCount = parseInt(queryParams.topTeamCount);
	const teamsAboveCount = parseInt(queryParams.teamsAboveCount);

	return new Response(
		JSON.stringify(
			await getPitData(tournamentKey, team, queueMatchCount, topTeamCount, teamsAboveCount)
		)
	);
}
