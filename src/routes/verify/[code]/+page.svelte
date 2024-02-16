<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;

    $: title = data.title;
    $: body = data.body;
</script>

<svelte:head>
    <title>Verify email | Lovat</title>
</svelte:head>

<div class="container">
    <div class="content">
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
</div>

<style>
    .container {
        display: grid;
        place-content: center;
        height: 80vh;
    }

    .content {
        margin: 0 auto;
        padding: 20px;

        max-width: 460px;
    }

    h1 {
        color: var(--on-background);
        font-size: 44px;
        font-style: normal;
        font-weight: 500;
        line-height: 50px;
        margin-bottom: 8px;
    }

    p {
        color: var(--body);
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 20px;
    }
</style>
