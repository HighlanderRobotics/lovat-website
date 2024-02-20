<svelte:head>
    <title>Download | Lovat</title>
</svelte:head>

<script lang="ts">
	import { Button } from 'magnolia-ui-svelte';
    import type { PageData } from './$types';

    const appStoreLink = 'https://apps.apple.com/app/lovat-dashboard/id6467466592';
    const apkLink = 'https://github.com/HighlanderRobotics/scouting_dashboard_app/releases/latest/download/app-release.apk';
	
	export let data: PageData;
</script>

<div class="main-page">
    <div class="content">
        <div class="info">
            <h1>Install Lovat&nbsp;Dashboard</h1>
            <p>If your team is registered on Lovat, you'll be able to sign in, join your team using its code, and start viewing data. Watch <a href="#">the walkthrough</a> to learn more about the steps involved and how to view data.</p>
            
            <p>If you're a scouting lead, you can register your team to scout, share data, and collaborate on strategy in a few simple steps. Watch <a href="#">the tutorial</a> to learn how.</p>
        </div>
        <div class="download">
            {#if data.deviceType === 'ios'}
                <Button element="a" href={appStoreLink}>App Store</Button>
                <div class="other-platform">
                    <p>Using Android?</p>
                    <a href={apkLink}>Download the APK</a>
                </div>
            {:else if data.deviceType === 'android'}
                <Button  element="a" href={apkLink}>Download APK</Button>
                <div class="other-plaform">
                    <p>Using iOS?</p>
                    <a href={appStoreLink}>App Store</a>
                </div>
            {:else}
                <div class="qr">
                    <img src={data.qrCode} alt="QR code to download Lovat Dashboard" />
                    <p>Scan with a mobile device to download.</p>
                </div>
                <p class="direct-download">Or download directly</p>
                <div class="downloads">
                    <div class="platform">
                        <p>iOS</p>
                        <a href={appStoreLink}>App Store</a>
                    </div>
                    <div class="platform">
                        <p>Android</p>
                        <a href={apkLink}>Download APK</a>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .direct-download {
        margin: 0.5em 0;
    }

    .direct-download, .downloads p {
        color: var(--body);
    }

    .main-page {
        min-height: calc(100vh - 65px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        margin: 20px;
        max-width: 700px;

        display: flex;
        gap: 48px;
    }

    .info p {
        color: var(--body);
        margin-bottom: 1em;
    }

    h1 {
        color: var(--on-background);

        /* Title/Medium */
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 133.333% */

        margin-bottom: 13px;
    }

    .other-platform {
        margin-top: 13px;
    }

    .other-platform p {
        color: var(--body);

        /* Body/Medium */
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    a {
        color: var(--victory-purple);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .downloads {
        display: flex;
        gap: 20px;
    }

    .qr img {
        margin-bottom: 10px;
        border-radius: 7px;
        width: min(200px, calc(100vw - 40px));
    }

    .info {
        flex: 2;
    }

    .download {
        flex: 1;
    }

    @media (max-width: 720px) {
        .main-page, .content {
            display: block;
        }
    }
</style>