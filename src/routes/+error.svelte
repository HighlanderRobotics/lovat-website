<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="full-center">
    <div class="content">
        <div class="sad-face">:(</div>
        <h1>An error has occurred.</h1>
        {#if $page.error != null}
            <p>{$page.error.message}</p>
        {/if}
    </div>
</div>

<style>
    .full-center {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sad-face {
        font-size: 40px;
    }

    p {
        color: var(--body);
    }
</style>
