<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Analytics from '$lib/components/Analytics.svelte';
	import { MagnoliaUIRoot } from 'magnolia-ui-svelte';
</script>

<Analytics />

<div class="color-scheme-dark">
	<MagnoliaUIRoot>
		<Navbar />
		<div class="main-content">
			<slot />
		</div>
	</MagnoliaUIRoot>
</div>
