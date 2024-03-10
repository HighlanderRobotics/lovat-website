<script lang="ts">
    export let rank: number;
    export let teamNumber: number;
    export let rankingPoints: number;
</script>

<div class="team-ranking">
    <div class="rank">{rank}</div>
    <div class="team-number">{teamNumber}</div>
    <div class="ranking-points">{rankingPoints} RP</div>
</div>

<style>
    .team-ranking {
        display: flex;
        align-items: center;
        padding: 7px;
        border-radius: 7px;
        gap: 7px;
        background-color: var(--secondary-container);
    }

    .rank {
        height: 24px;
        width: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        font-size: 12px;
        background-color: #85A3E0;
        color: #001A4C;
        border-radius: 4px;
    }

    .team-number {
        font-size: 14px;
    }

    .ranking-points {
        margin-left: auto;
        background-color: var(--background);
        border-radius: 4px;
        padding: 2px 7px;
        font-size: 10px;
        display: flex;
        align-items: center;
        align-self: stretch;
    }
</style>
