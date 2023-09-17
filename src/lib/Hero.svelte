<script>
	import { Button } from "magnolia-ui-svelte";
</script>
<section class="hero">
    <svg width="824" height="521" viewBox="0 0 824 521" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="660.082" cy="425.172" rx="705.181" ry="344" transform="rotate(-23.8966 660.082 425.172)" fill="url(#paint0_radial_233_10)"/>
        <defs>
        <radialGradient id="paint0_radial_233_10" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(660.082 425.172) rotate(90) scale(344 705.181)">
        <stop stop-color="#B59AFF" stop-opacity="0.4"/>
        <stop offset="0.84375" stop-color="#B59AFF" stop-opacity="0.0354167"/>
        <stop offset="1" stop-color="#B59AFF" stop-opacity="0"/>
        </radialGradient>
        </defs>
    </svg>
        
    <img src="/assets/img/scouting-app-render.png" alt="A render of the scouting app">
    <div class="content">
        <h1>The big <span class="highlight">catchy statement</span> goes here.</h1>
        <p>And maybe a subtitle to clarify and justify such a bold statement.</p>
        <Button variant="primary">Watch it in action</Button>
    </div>
</section>

<style>
    .hero {
        height: 712px;
        display: flex;
        align-items: center;
        position: relative;
    }

    h1 {
        font-size: 60px;
        font-style: normal;
        font-weight: 500;
        line-height: 60px; /* 100% */
    }

    .highlight {
        color: var(--victory-purple);
    }

    p {
        margin-top: 8px;
        margin-bottom: 24px;
    }

    .content {
        padding: 62px;
        max-width: 700px;
    }

    img {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    svg {
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>
