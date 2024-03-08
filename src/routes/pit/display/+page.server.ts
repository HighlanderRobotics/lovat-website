import type { PageServerLoad } from "./$types";
import { LOVAT_API_BASE } from "$env/static/private";
import { z } from "zod";

export const load: PageServerLoad = async ({ url }) => {
    console.log(url.searchParams.get("asdf"))

    const queryParams = z.object({
        tournamentKey: z.string(),
        team: z.string().refine((value) => !isNaN(parseInt(value))),
        queueMatchCount: z.string().refine((value) => !isNaN(parseInt(value))),
        topTeamCount: z.string().refine((value) => !isNaN(parseInt(value))),
        teamsAboveCount: z.string().refine((value) => !isNaN(parseInt(value))),
    }).parse(Object.fromEntries(url.searchParams.entries()));

    const { tournamentKey } = queryParams;
    const team = parseInt(queryParams.team);
    const queueMatchCount = parseInt(queryParams.queueMatchCount);
    const topTeamCount = parseInt(queryParams.topTeamCount);
    const teamsAboveCount = parseInt(queryParams.teamsAboveCount);

    const response = await fetch(`${LOVAT_API_BASE}/v1/analysis/pitdisplay`);

    if (!response.ok) {
        throw new Error("Failed to fetch pit display data");
    }

    const allianceSchema = z.object({
        teams: z.array(z.number()).length(3),
        winPrediction: z.number().optional(),
    });

    const matchSchema = z.object({
        key: z.string(),
        alliances: z.object({
            red: allianceSchema,
            blue: allianceSchema,
        }),
    });

    const matchesSchema = z.object({
        nowPlaying: matchSchema.optional(),
        next: matchSchema.optional(),
        teamNext: matchSchema.optional(),
    });

    const teamMatchTimelineSchema = z.object({
        matchCount: z.number(),
        currentMatchCount: z.number(),
    });

    const teamRankingBlockSchema = z.object({
        type: z.literal("team"),
        number: z.number(),
        rank: z.number(),
        rankingPoints: z.number(),
    });

    const collapsedDividerRankingBlockSchema = z.object({
        type: z.literal("collapsedDivider"),
        teamCount: z.number(),
    });

    const rankingBlockSchema = z.union([teamRankingBlockSchema, collapsedDividerRankingBlockSchema]);

    const webcastSchema = z.object({
        type: z.enum([
            "youtube",
            "twitch",
            "ustream",
            "iframe",
            "html5",
            "rtmp",
            "livestream",
            "direct_link",
            "mms",
            "justin",
            "stemtv",
            "dacast",
        ]),
        channel: z.string(),
    });

    const pitDisplayResponseSchema = z.object({
        webcasts: z.array(webcastSchema),
        matches: matchesSchema,
        teamMatchTimeline: teamMatchTimelineSchema.optional(),
        rankingBlocks: z.array(rankingBlockSchema),
    });

    const pitDisplayResponse = pitDisplayResponseSchema.parse(await response.json());

    return {
        tournamentKey,
        team,
        queueMatchCount,
        topTeamCount,
        teamsAboveCount,
        analysis: pitDisplayResponse,
    }
};
