<script>
	import { Button, Icon } from 'magnolia-ui-svelte';
</script>

<section class="hero">
	<svg
		width="824"
		height="521"
		viewBox="0 0 824 521"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<ellipse
			cx="660.082"
			cy="425.172"
			rx="705.181"
			ry="344"
			transform="rotate(-23.8966 660.082 425.172)"
			fill="url(#paint0_radial_233_10)"
		/>
		<defs>
			<radialGradient
				id="paint0_radial_233_10"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(660.082 425.172) rotate(90) scale(344 705.181)"
			>
				<stop stop-color="#B59AFF" stop-opacity="0.4" />
				<stop offset="0.84375" stop-color="#B59AFF" stop-opacity="0.0354167" />
				<stop offset="1" stop-color="#B59AFF" stop-opacity="0" />
			</radialGradient>
		</defs>
	</svg>

	<img src="/assets/img/scouting-app-render.png" alt="A render of the scouting app" />
	<div class="content-wrapper">
		<div class="content">
			<h1>Centralize your team’s strategy in minutes.</h1>
			<p>Easily view real-time analytics built on human-collected data.</p>
			<div class="button-items">
				<Button variant="primary" element="a" href="/download">Get Started</Button>
				<a href="/get-updates">
					<span>Stay Updated</span>
					<Icon icon="navigate_next" color="var(--victory-purple)" size={28} />
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		height: 712px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	h1 {
		font-size: 60px;
		font-style: normal;
		font-weight: 500;
		line-height: 60px; /* 100% */
	}

	p {
		margin-top: 8px;
		margin-bottom: 24px;
		color: var(--body);
	}

	.content-wrapper {
		width: min(1000px, 100vw);
		position: absolute;
		z-index: 10;
	}
	.content {
		/* margin: 31px 400px 31px 31px; */
		max-width: 674px;
		padding: 24px;
	}

	img {
		position: absolute;
		bottom: 0;
		right: 0;
		pointer-events: none;
		z-index: 6;
		width: max(min(780px, 60vw), 400px);
	}

	svg {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 5;
		width: max(min(1000px, 80vw), 600px);
	}

	.button-items {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 14px;
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
</style>
