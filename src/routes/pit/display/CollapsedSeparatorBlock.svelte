<script lang="ts">
    export let teamCount: number;
</script>

<div class="collapsed-separator">
    <p>{teamCount} {teamCount === 1 ? "team" : "teams"}</p>
</div>

<style>
    .collapsed-separator {
        display: flex;
        align-items: center;
        gap: 7px;
    }

    .collapsed-separator p {
        font-size: 12px;
        font-weight: 500;
        color: var(--body);
    }

    .collapsed-separator::before,
    .collapsed-separator::after {
        content: "";
        flex: 1;
        height: 2px;
        background-color: var(--body);
        border-radius: 2px;
    }
</style>
