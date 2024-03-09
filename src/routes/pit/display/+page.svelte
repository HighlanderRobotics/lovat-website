<script lang="ts">
    import TimeAgo from "$lib/components/TimeAgo.svelte";
	import { onDestroy, onMount } from "svelte";
    import type { PageData } from "./$types";
	import Rankings from "./Rankings.svelte";
	import { invalidateAll } from "$app/navigation";
	import Webcast from "./Webcast.svelte";
	import MatchTimeline from "./MatchTimeline.svelte";
	import MatchCards from "./MatchCards.svelte";

    export let data: PageData;

    let interval: NodeJS.Timeout;

    onMount(() => {
        interval = setInterval(() => {
            invalidateAll();
        }, 2 * 60 * 1000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<svelte:head>
    <title>Pit Display | Lovat</title>
</svelte:head>

<div class="display">
    <div class="content">
        <div class="matches">
            <Webcast webcasts={data.analysis.webcasts} />
            <MatchCards matches={data.analysis.matches} teamNumber={data.team} />
            {#if data.analysis.teamMatchTimeline}
                <MatchTimeline
                    totalMatchCount={data.analysis.teamMatchTimeline?.matchCount + 1}
                    playedMatchCount={data.analysis.teamMatchTimeline?.currentMatchCount - 1}
                    queueMatchCount={data.queueMatchCount}
                />
            {/if}
        </div>
        <Rankings rankingBlocks={data.analysis.rankingBlocks} />
    </div>
    <div class="footer">
        <p>Powered by Lovat</p>
        <p class="updated-at">Updated <TimeAgo date={data.updatedAt} /></p>
    </div>
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
