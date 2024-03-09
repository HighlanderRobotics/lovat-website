<script lang="ts">
    export let totalMatchCount: number;
    export let playedMatchCount: number;
    export let queueMatchCount: number;
</script>

<div
    class="match-timeline"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax={totalMatchCount}
    aria-valuenow={playedMatchCount}
    aria-valuetext={`${playedMatchCount} of ${totalMatchCount} matches played until team's next match.`}
    class:queue={playedMatchCount >= (totalMatchCount - queueMatchCount)}
>
    <div class="filled-region" style:width={`${(playedMatchCount/totalMatchCount)*100}%`} />

    {#each Array.from({ length: totalMatchCount }) as _, i}
        <div
            class="match"
            class:played={i < playedMatchCount}
            class:queue={i === totalMatchCount - queueMatchCount - 1}
        />
    {/each}
</div>

<style>
    .match-timeline {
        position: relative;
        height: 7px;
        border-radius: 7px;
        background-color: var(--secondary-container);
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        padding: 0 1.5px;
    }

    .filled-region {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: var(--victory-purple);
        border-radius: 7px;

        transition: width 1s ease-in-out, background-color 1s ease-in-out;
    }

    .queue .filled-region {
        background-color: var(--danger);
    }

    .match {
        height: 4px;
        width: 4px;
        border-radius: 50%;
        background-color: var(--light-gray);
        position: relative;

        transition: background-color 1s ease-in-out;
    }

    .match.played {
        background-color: var(--background);
    }

    .match.queue {
        background-color: var(--danger);
    }

    .queue .match.queue {
        background-color: var(--on-background);
    }
</style>
