import { z } from 'zod';

export const allianceSchema = z.object({
	teams: z.array(z.number()).length(3),
	winPrediction: z.number().optional()
});

export const matchSchema = z.object({
	key: z.string(),
	alliances: z.object({
		red: allianceSchema,
		blue: allianceSchema
	})
});

export const matchesSchema = z.object({
	nowPlaying: matchSchema.optional(),
	next: matchSchema.optional(),
	teamNext: matchSchema.optional()
});

export const teamMatchTimelineSchema = z.object({
	matchCount: z.number(),
	currentMatchCount: z.number()
});

export const teamRankingBlockSchema = z.object({
	type: z.literal('team'),
	number: z.number(),
	rank: z.number(),
	rankingPoints: z.number()
});

export const collapsedDividerRankingBlockSchema = z.object({
	type: z.literal('collapsedDivider'),
	teamCount: z.number()
});

export const rankingBlockSchema = z.union([
	teamRankingBlockSchema,
	collapsedDividerRankingBlockSchema
]);

export const webcastSchema = z.object({
	type: z.enum([
		'youtube',
		'twitch',
		'ustream',
		'iframe',
		'html5',
		'rtmp',
		'livestream',
		'direct_link',
		'mms',
		'justin',
		'stemtv',
		'dacast'
	]),
	channel: z.string()
});

export const pitDisplayResponseSchema = z.object({
	webcasts: z.array(webcastSchema),
	matches: matchesSchema,
	teamMatchTimeline: teamMatchTimelineSchema.optional(),
	rankingBlocks: z.array(rankingBlockSchema)
});

export type PitDisplayData = {
	tournamentKey: string;
	team: number;
	queueMatchCount: number;
	topTeamCount: number;
	teamsAboveCount: number;
	analysis: z.infer<typeof pitDisplayResponseSchema>;
	updatedAt: number;
};
