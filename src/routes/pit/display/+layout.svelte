<script lang="ts">
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { MagnoliaUIRoot } from 'magnolia-ui-svelte';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<MagnoliaUIRoot>
		<slot />
	</MagnoliaUIRoot>
</QueryClientProvider>
