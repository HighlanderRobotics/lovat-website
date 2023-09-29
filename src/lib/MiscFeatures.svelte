<script>

	import { Icon } from "magnolia-ui-svelte";

</script>
<section>
    <div class="content">
        <div class="feature">
            <Icon icon="devices" />
            <h2>Cross-platform</h2>
            <p>The Lovat apps support iOS and Android, with more on the way. Scouters can use their existing devices without the need to share.</p>
        </div>
        <div class="feature">
            <Icon icon="cloud_off" />
            <h2>Offline support</h2>
            <p>Spotty connections shouldn’t mean spotty data. Matches save to scout devices and can be transferred via a network or QR codes.</p>
        </div>
        <div class="feature">
            <Icon icon="schedule" />
            <h2>Quick setup</h2>
            <p>With one download, gain access to our real-time Chezy data and all our analytics.</p>
        </div>
    </div>
</section>

<div class="whitepaper-wrapper">
    <a href="https://docs.google.com/document/d/1dwBV2D_n_CE62xlOW9997xGdaEdXu04mVXeAho9EgnY/preview" target="_blank">
        <span>Read the whitepaper</span>
        <Icon icon="navigate_next" color="var(--victory-purple)" size={28} />
    </a>
    <a href="https://www.youtube.com/watch?v=P_GO878wM_Y" target="_blank">
        <span>Watch the video</span>
        <Icon icon="navigate_next" color="var(--victory-purple)" size={28} />
    </a>
</div>

<style>
    .content {
        display: flex;
        background-color: #1f1f1f;

        max-width: 1000px;
        gap: 50px;
        margin: 60px auto 20px auto;
        padding: 0px 24px;
    }

    p {
        color: var(--body);
    }

    .feature {
        flex: 1;
    }

    .whitepaper-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding-top: 30px;
        padding-bottom: 60px;
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--victory-purple);

        font-size: 17px;
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

    @media (max-width: 700px) {
        .content {
            flex-direction: column;
        }
    }
</style>