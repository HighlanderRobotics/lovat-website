<svelte:head>
    <title>Download | Lovat</title>
</svelte:head>

<script lang="ts">
	import { Button } from 'magnolia-ui-svelte';
    import type { PageData } from './$types';

    const testFlightLink = 'https://testflight.apple.com/join/iydxu0gu';
    const apkLink = 'https://github.com/HighlanderRobotics/scouting_dashboard_app/releases/latest/download/app-release.apk';
	
	export let data: PageData;
</script>

<div class="main-page">
    <div class="content">
        <div class="info">
            <h1>Install Lovat&nbsp;Dashboard</h1>
            <p>
                The full Lovat system, including Lovat Dashboard and Lovat Collection  with all features will be available starting with the 2024 season.
            </p>

            <p>
                To take an early look, Lovat Dashboard, along with all of 8033’s scouting data for Chezy Champs 2023 will be available to everyone during the event.
                If you are interested in using the full system, please use this opportunity to download Lovat Dashboard and preview everything it has to offer.
            </p>
        </div>
        <div class="download">
            {#if data.deviceType === 'ios'}
                <Button element="a" href={testFlightLink}>Join with TestFlight</Button>
                <div class="other-platform">
                    <p>Using Android?</p>
                    <a href={apkLink}>Download the APK</a>
                </div>
            {:else if data.deviceType === 'android'}
                <Button  element="a" href={apkLink}>Download APK</Button>
                <div class="other-plaform">
                    <p>Using iOS?</p>
                    <a href={testFlightLink}>Join with TestFlight</a>
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
                        <a href={testFlightLink}>TestFlight</a>
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