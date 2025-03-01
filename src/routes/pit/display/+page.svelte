<script lang="ts">
	import TimeAgo from '$lib/components/TimeAgo.svelte';
	import type { PageData } from './$types';
	import Rankings from './Rankings.svelte';
	import Webcast from './Webcast.svelte';
	import MatchTimeline from './MatchTimeline.svelte';
	import MatchCards from './MatchCards.svelte';
	import { createQuery } from '@tanstack/svelte-query';
	import type { PitDisplayData } from '$lib/util/pitDataType';

	export let data: PageData;

	let interval: NodeJS.Timeout;

	const query = createQuery({
		queryFn: async () => {
			const response = await fetch(
				'/pit/data?' +
					new URLSearchParams({
						tournamentKey: data.tournamentKey,
						team: data.team.toString(),
						queueMatchCount: data.queueMatchCount.toString(),
						topTeamCount: data.topTeamCount.toString(),
						teamsAboveCount: data.teamsAboveCount.toString()
					})
			);

			if (!response.ok) {
				throw new Error('Failed to get pit data');
			}

			return (await response.json()) as PitDisplayData;
		},
		queryKey: [
			'pit-display',
			{
				tournamentKey: data.tournamentKey,
				team: data.team.toString(),
				queueMatchCount: data.queueMatchCount.toString(),
				topTeamCount: data.topTeamCount.toString(),
				teamsAboveCount: data.teamsAboveCount.toString()
			}
		],
		initialData: data,
		refetchInterval: 2 * 60 * 1000
	});
</script>

<svelte:head>
	<title>Pit Display | Lovat</title>
</svelte:head>

<div class="display">
	{#if $query.data}
		<div class="content">
			<div class="matches">
				<Webcast webcasts={$query.data.analysis.webcasts} />
				<MatchCards matches={$query.data.analysis.matches} teamNumber={$query.data.team} />
				{#if $query.data.analysis.teamMatchTimeline}
					<MatchTimeline
						totalMatchCount={$query.data.analysis.teamMatchTimeline?.matchCount + 1}
						playedMatchCount={$query.data.analysis.teamMatchTimeline?.currentMatchCount - 1}
						queueMatchCount={$query.data.queueMatchCount}
					/>
				{/if}
			</div>
			<Rankings rankingBlocks={$query.data.analysis.rankingBlocks} />
		</div>
		<div class="footer">
			<p>Powered by Lovat</p>
			<p class="updated-at">Updated <TimeAgo date={new Date($query.data.updatedAt)} /></p>
		</div>
	{/if}
</div>

<style>
	.display {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.content {
		display: flex;
		padding: 14px;
		gap: 14px;
		height: calc(100vh - 32px);
	}

	.matches {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.footer {
		display: flex;
		align-items: center;
		height: 32px;
		justify-content: space-between;
		padding: 0 16px;
		background-color: var(--secondary-container);
	}

	.footer p {
		font-style: normal;
		font-weight: 400;
		font-size: 10px;
		line-height: 15px;
	}

	.updated-at {
		color: var(--body);
	}
</style>
