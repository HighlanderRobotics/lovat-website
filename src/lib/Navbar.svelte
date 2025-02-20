<script>
	import { onNavigate } from '$app/navigation';
	import { Button, DensityProvider, Icon, MenuWrapper, Menu, MenuButton } from 'magnolia-ui-svelte';

	let expanded = false;
	let isLearnOpen = false;

	$: if (!expanded) isLearnOpen = false;

	onNavigate(() => {
		expanded = false;
		isLearnOpen = false;
	});

	export let hasBanner = false;
</script>

<div class="column">
	<nav>
		<a href="https://frc8033.com/" target="_blank">
			<img src="/assets/img/logo.png" alt="8033" />
		</a>
		<a class="main-title" href="/">Lovat</a>
		<button class="menu-button" on:click={() => (expanded = !expanded)}>
			<Icon icon="menu" />
		</button>
		<DensityProvider density="compact">
			<div class="actions" class:expanded>
				<!-- <MenuWrapper>
					<Button variant="text-only-secondary" on:click={() => (isLearnOpen = true)}>Learn</Button>
					<Menu bind:open={isLearnOpen}>
						<MenuButton element="a" href="/collection">Collection</MenuButton>
						<MenuButton element="a" href="/dashboard">Dashboard for Analysts</MenuButton>
						<MenuButton element="a" href="/scouting-lead">Dashboard for Scouting Leads</MenuButton>
					</Menu>
				</MenuWrapper> -->
				<Button variant="text-only-secondary" element="a" href="https://lovat-learn.highlanderrobotics.com/guides/welcome">Learn</Button>
				<Button variant="text-only-secondary" element="a" href="/about">About</Button>
				<Button variant="text-only-secondary" element="a" href="/contact">Contact</Button>
				<Button variant="secondary" element="a" href="/dashboard/download"
					>Get Lovat Dashboard</Button
				>
			</div>
		</DensityProvider>
	</nav>

	{#if hasBanner}
		<div class="secondary-container">
			<div class="banner-box">
				<p>Lovat for Reefscape is here!</p>
				<a href="/get-updates" class="stayupdated">
					<span>Learn More</span>
					<Icon icon="navigate_next" color="var(--victory-purple)" size={28} />
				</a>
				
			</div>
		</div>
	{/if}
</div>

<style>
	div.secondary-container {
		background-color: var(--secondary-container);
	}
	div.banner-box {
		display: flex;
		font-size: 16px;
		font-weight: 400;
		flex-direction: row; 
		max-width: 1000px;
		margin: 0 auto;
		padding: 10px 24px;
		justify-content: space-between;
	}
	img {
		width: 93px;
		height: 27px;
	}
	div.column {
		display: flex;
		flex-direction: column;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
	}
	nav {
		display: flex;
		position: relative;

		width: 100%;
		justify-content: space-between;
		align-items: center;

		padding: 16px;

		background-color: var(--background);
		height: 65px;
	}
	.actions {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.main-title {
		color: var(--victory-purple);
		font-size: 30px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		position: absolute;
		top: 50%;
		left: 50%;
		text-decoration: none;
		transform: translate(-50%, -50%);
	}

	.menu-button {
		appearance: none;
		border: none;
		background-color: transparent;
		cursor: pointer;

		display: none;

		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
	}
	a.stayupdated {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: var(--victory-purple);

		font-size: 15px;
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
	@media (max-width: 900px) {
		.menu-button {
			display: block;
		}

		.actions {
			position: fixed;
			left: 0;
			right: 0;
			top: 0;

			flex-direction: column;
			gap: 5px;
			align-items: start;
			background-color: var(--background);
			padding: 10px;
			margin-top: 65px;

			visibility: hidden;
			opacity: 0%;
			transition: 0.2s;
			transform: translateY(-10%);
		}

		.actions.expanded {
			opacity: 100%;
			visibility: visible;
			transform: translateY(0%);
		}
		div.banner-box {
			flex-direction: column; 
		}
	}
</style>
