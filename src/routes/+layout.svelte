<script lang="ts">
	import Analytics from '$lib/components/Analytics.svelte';
	import { MagnoliaUIRoot } from 'magnolia-ui-svelte';
</script>

<Analytics />

<div class="color-scheme-dark">
	<MagnoliaUIRoot>
		<slot />
	</MagnoliaUIRoot>
</div>
