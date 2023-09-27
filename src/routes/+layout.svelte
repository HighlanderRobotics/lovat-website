<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
    import { MagnoliaUIRoot } from 'magnolia-ui-svelte';
</script>

<div class="color-scheme-dark">
    <MagnoliaUIRoot>
        <Navbar />
        <div class="main-content">
            <slot />
        </div>
    </MagnoliaUIRoot>
</div>

<style>
    .main-content {
        margin-top: 65px;
    }
</style>