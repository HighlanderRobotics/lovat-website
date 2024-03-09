<script lang="ts">
	import type { CardMatch } from "./+page";

    export let match: CardMatch;

    function localizeMatchKey(key: string) {
        // Takes in "2022cc_qm1" or "2022cc_em1" and returns "Qualifier 1" or "Elimination 1"
        const shortMatchKey = key.split("_")[1];

        if (shortMatchKey.startsWith("qm")) {
            return `Qualifier ${shortMatchKey.slice(2)}`;
        }

        if (shortMatchKey.startsWith("em")) {
            return `Elimination ${shortMatchKey.slice(2)}`;
        }
    }
</script>

<div class="match-card">
    <div class="header">
        <h3>{localizeMatchKey(match.key)}</h3>
        {#if match.title}
            <span class="title">
                {match.title}
            </span>
        {/if}
    </div>

    <ul class="alliance red">
        {#each match.alliances.red.teams as team}
            <p>{team}</p>
        {/each}
    </ul>

    <ul class="alliance blue">
        {#each match.alliances.blue.teams as team}
            <p>{team}</p>
        {/each}
    </ul>

    <div class="footer">
        <p>Predicted winning</p>
        <div class="prediction" class:has-prediction={match.alliances.red.winPrediction && match.alliances.blue.winPrediction}>
            {#if match.alliances.red.winPrediction && match.alliances.blue.winPrediction}
                <div
                    class="red-portion"
                    style:width={(match.alliances.red.winPrediction * 100) + "%"}
                />

                <div class="percentage">
                    {Math.round(match.alliances.red.winPrediction * 100)}%
                </div>

                <div class="percentage">
                    {Math.round(match.alliances.blue.winPrediction * 100)}%
                </div>
            {:else}
                <p>No prediction</p>
            {/if}
        </div>
    </div>
</div>

<style>
    .match-card {
        display: flex;
        flex-direction: column;
        border-radius: 7px;
        background-color: var(--secondary-container);
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 7px;
    }

    .header h3 {
        font-size: 12px;
        font-weight: 400;
    }

    .title {
        font-size: 8px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 4%;

        color: var(--background);

        background-color: var(--victory-purple);
        padding: 3px 5px;
        border-radius: 4px;
    }

    .alliance {
        display: flex;
        padding: 7px;
    }

    .alliance p {
        font-size: 14px;
        flex: 1;
        text-align: center;
    }

    .alliance p:first-child {
        text-align: start;
    }

    .alliance p:last-child {
        text-align: end;
    }

    .alliance.red {
        background-color: #793F3E;
    }

    .alliance.blue {
        background-color: #364077;
    }

    .footer {
        padding: 4px 7px 7px 7px;
    }

    .footer > p {
        font-size: 8px;
        padding-bottom: 3px;
    }

    .prediction {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        height: 16px;
        border-radius: 4px;
        background-color: var(--background);

        overflow: hidden;

        padding: 0 4px;
    }

    .prediction.has-prediction {
        background-color: #364077;
    }

    .red-portion {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: #793F3E;
    }

    .percentage {
        position: relative;
        font-size: 8px;
    }

    .prediction p {
        font-size: 8px;
        text-align: center;
        flex: 1
    }
</style>
