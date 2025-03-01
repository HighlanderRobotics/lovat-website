import { LOVAT_API_BASE } from '$env/static/private';
import { PitDisplayData, pitDisplayResponseSchema } from './pitDataType';

export const getPitData = async (
	tournamentKey: string,
	team: number,
	queueMatchCount: number,
	topTeamCount: number,
	teamsAboveCount: number
) => {
	const response = await fetch(
		`${LOVAT_API_BASE}/v1/analysis/pitdisplay?team=${encodeURIComponent(
			team
		)}&tournamentKey=${encodeURIComponent(tournamentKey)}&topTeamCount=${encodeURIComponent(
			topTeamCount
		)}&teamsAboveCount=${encodeURIComponent(teamsAboveCount)}`
	);

	if (!response.ok) {
		throw new Error('Failed to fetch pit display data');
	}

	const pitDisplayResponse = pitDisplayResponseSchema.parse(await response.json());

	return {
		tournamentKey,
		team,
		queueMatchCount,
		topTeamCount,
		teamsAboveCount,
		analysis: pitDisplayResponse,
		updatedAt: Date.now()
	} satisfies PitDisplayData;
};
