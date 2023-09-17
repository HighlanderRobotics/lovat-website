<script>

	import { Button, Icon } from "magnolia-ui-svelte";

</script>
<section>
    <div>
        <Icon icon="devices" />
        <h2>Cross-platform</h2>
        <p>The Lovat apps support iOS and </p>
        <p>Android, with more on the way. </p>
        <p>Scouters can use their existing </p>
        <p>devices without the need to share</p>
    </div>
    <div>
        <Icon icon="cloud_off" />
        <h2>Offline support</h2>
        <p>Spotty connections shouldn’t mean </p>
        <p>spotty data. Matches save to scout </p>
        <p>devices and can be transferred </p>
        <p>via a network or QR codes.</p>
    </div>
    <div>
        <Icon icon="person" />
        <h2>Feature #3</h2>
        <p>One more feature here to convince</p>
        <p>people to use the website</p>
    </div>
</section>

<div class="whitepaper-wrapper">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="https://docs.google.com/document/d/1dwBV2D_n_CE62xlOW9997xGdaEdXu04mVXeAho9EgnY/preview" target="_blank">
        <span>Read the whitepaper</span>
        <Icon icon="navigate_next" color="var(--victory-purple)" />
    </a>
</div>

<style>
    section {
        padding-top: 50px;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-evenly;
        background-color: #1f1f1f;
    }

    .whitepaper-wrapper {
        display: flex;
        justify-content: center;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--victory-purple);

        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    a span {
        color: var(--victory-purple);
    }

    a:visited {
        color: var(--victory-purple);
    }

    a:hover span {
        text-decoration: underline;
    }
</style>