<script lang="ts">
	import { flip } from "svelte/animate";
    import { quintInOut } from "svelte/easing";
	import type { PageData } from "./$types";
	import CollapsedSeparatorBlock from "./CollapsedSeparatorBlock.svelte";
	import TeamRankingBlock from "./TeamRankingBlock.svelte";

    export let rankingBlocks: PageData["analysis"]["rankingBlocks"];
</script>

<div class="rankings-wrapper">
    <div class="rankings">
        {#each rankingBlocks as block (block.type === 'team' ? block.number : 'divider')}
            <div animate:flip={{ duration: 500, easing: quintInOut }}>
                {#if block.type === 'team'}
                    <TeamRankingBlock
                        rank={block.rank}
                        teamNumber={block.number}
                        rankingPoints={block.rankingPoints}
                    />
                {:else if block.type === 'collapsedDivider'}
                    <CollapsedSeparatorBlock teamCount={block.teamCount} />
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    .rankings-wrapper {
        display: flex;
        overflow: hidden;
        border-radius: 7px;
    }

    .rankings {
        display: flex;
        flex-direction: column;
        gap: 7px;
        min-width: 200px;
        overflow: scroll;
    }
</style>
