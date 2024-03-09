<script lang="ts">
	import { flip } from "svelte/animate";
    import { cubicInOut, quintInOut } from "svelte/easing";
    import type { PageData } from "./$types";
	import type { CardMatch } from "./+page";
	import MatchCard from "./MatchCard.svelte";
	import { fade, scale } from "svelte/transition";

    export let matches: PageData["analysis"]["matches"];
    
    export let teamNumber: number;

    let cardMatches: CardMatch[];

    $: {
        const newCardMatches = [];

        if (matches.nowPlaying) {
            newCardMatches.push({
                ...matches.nowPlaying,
                title: "Now playing",
            });
        }

        if (matches.next) {
            newCardMatches.push(matches.next);
        }

        if (matches.teamNext) {
            newCardMatches.push({
                ...matches.teamNext,
                title: `Next for ${teamNumber}`
            });
        }

        cardMatches = newCardMatches;
    }
</script>

<div class="match-cards">
    {#each cardMatches as match (match.key)}
        <div animate:flip={{ duration: 300, easing: cubicInOut }} transition:fade={{ duration: 150 }}>
            <MatchCard match={match} />
        </div>
    {/each}
</div>

<style>
    .match-cards {
        display: flex;
        gap: 14px;
    }

    .match-cards > div {
        flex: 1;
    }
</style>
