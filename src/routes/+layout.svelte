<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
    import { MagnoliaUIRoot } from 'magnolia-ui-svelte';
</script>

<div class="color-scheme-dark">
    <MagnoliaUIRoot>
        <Navbar />
        <slot />
    </MagnoliaUIRoot>
</div>

<style>
</style>