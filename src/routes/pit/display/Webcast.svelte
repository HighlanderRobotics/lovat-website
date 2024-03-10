<script lang="ts">
    import type { PageData } from "./$types";

    export let webcasts: PageData["analysis"]["webcasts"];

    const supportedProviders: PageData["analysis"]["webcasts"][0]["type"][] = [
        "twitch",
        "youtube",
    ]

    $: supportedWebcasts = webcasts.filter(webcast => supportedProviders.includes(webcast.type));
    $: webcast = supportedWebcasts[0];

    let host: string;

    $: {
        if (typeof window !== "undefined") {
            host = window.location.hostname;
        }
    }
</script>

<div class="webcast">
    {#if webcast?.type === "twitch"}
        <iframe
            title="Twitch Webcast"
            src={`https://player.twitch.tv/?channel=${encodeURIComponent(webcast.channel)}&parent=${encodeURIComponent(host)}&muted=true&autoplay=true`}
            frameborder="0"
            allowfullscreen
            scrolling="no"
        />
    {:else if webcast?.type === "youtube"}
        <iframe
            title="YouTube Webcast"
            src={`https://www.youtube.com/embed/${encodeURIComponent(webcast.channel)}?autoplay=1&mute=1&enablejsapi=1&origin=${encodeURIComponent(host)}`}
            frameborder="0"
            allowfullscreen
        />
    {:else}
        <p>No webcasts available</p>
    {/if}
</div>

<style>
    .webcast {
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-radius: 7px;
        background-color: var(--secondary-container);
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    iframe {
        width: 100%;
        height: 100%;
    }

    p {
        font-size: 14px;
        font-weight: 500;
        color: var(--body);
    }
</style>
