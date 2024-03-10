<script lang="ts">
	import { onDestroy, onMount } from "svelte";

    export let date: Date;

    let timeAgo: string;

    $: timeAgo = getTimeAgo(date);

    function getTimeAgo(date: Date) {
        const now = new Date();
        const rtf1 = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

        const diff = now.getTime() - date.getTime();

        if (diff < 60000) {
            return rtf1.format(-Math.floor(diff / 1000), 'second');
        }

        if (diff < 3600000) {
            return rtf1.format(-Math.floor(diff / 60000), 'minute');
        }

        if (diff < 86400000) {
            return rtf1.format(-Math.floor(diff / 3600000), 'hour');
        }


        return rtf1.format(-Math.floor(diff / 86400000), 'day');
    }

    function update() {
        timeAgo = getTimeAgo(date);
    }

    let interval: NodeJS.Timeout;

    onMount(() => {
        interval = setInterval(update, 1000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

{timeAgo}
