<script lang="ts">
	import { Button } from 'magnolia-ui-svelte';
</script>

<svelte:head>
	<title>Download | Lovat</title>
</svelte:head>

<section class="intro">
	<div class="content">
		<h1>Get started with Lovat</h1>
		<p>Lovat has two apps. Here's which one you need.</p>
	</div>
</section>

<div class="main-page">
	<div class="content">
		<div class="app-card">
			<div class="app-info">
				<p class="who">For scouting leads</p>
				<h2>Lovat Dashboard</h2>
				<p class="blurb">
					Register your team on Lovat, manage your scouting team, and view analytics. This is where
					data uploaded by scouters comes into use.
				</p>
				<div class="cta">
					<Button element="a" href="/dashboard/download">Download</Button>
					<p class="alternative">
						<span class="or">or</span>
						<a href="https://dashboard.lovat.app">use web version</a>
					</p>
				</div>
			</div>
		</div>

		<div class="app-card">
			<div class="app-info">
				<p class="who">For scouters</p>
				<h2>Lovat Collection</h2>
				<p class="blurb">
					The app your scouters use during matches to record data. You'll need to be on a team
					registered with Lovat to scout.
				</p>
				<div class="cta">
					<Button element="a" href="/collection/download">Download</Button>
				</div>
			</div>
		</div>

		<div class="help">
			<p>Have any questions? <a href="/contact">Get in touch</a></p>
		</div>
	</div>
</div>

<style>
	.app-info > p.blurb {
		margin-bottom: 16px;
	}

	.intro {
		background-color: var(--secondary-container);
		padding: 70px 20px;
	}

	.intro .content {
		max-width: 640px;
		margin: 0 auto;
		text-align: center;
	}

	.intro h1 {
		color: var(--on-background);
		font-size: 40px;
		font-style: normal;
		font-weight: 500;
		line-height: 50px;
		margin-bottom: 8px;
	}

	.intro p {
		color: var(--body);
		font-size: 18px;
	}

	.main-page {
		padding: 40px 20px 80px;
	}

	.content {
		max-width: 640px;
		margin: 0 auto;
	}

	.app-card {
		background-color: var(--surface-container);
		border: 1px solid var(--outline-variant);
		border-radius: 16px;
		padding: 24px;
		margin-bottom: 24px;
	}

	.app-info h2 {
		color: var(--on-background);
		font-size: 28px;
		font-style: normal;
		font-weight: 500;
		line-height: 36px;
	}

	.who {
		font-size: 14px;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.app-info > p {
		color: var(--body);
		font-size: 16px;
		line-height: 1.5;
		margin-bottom: 4px;
	}

	.app-info > p .cta {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 12px;
		flex-wrap: wrap;
	}

	.or {
		color: var(--body);
		font-size: 14px;
	}

	.cta a {
		color: var(--victory-purple);
		font-size: 14px;
		text-decoration: none;
	}

	.cta a:hover {
		text-decoration: underline;
	}

	.help {
		text-align: center;
		margin-top: 32px;
		color: var(--body);
		font-size: 15px;
	}

	.help p {
		color: var(--body);
	}

	.help a {
		color: var(--victory-purple);
		text-decoration: none;
	}

	.help a:hover {
		text-decoration: underline;
	}

	.alternative {
		margin-top: 8px;
	}

	h2 {
		margin-bottom: 4px;
	}
</style>
