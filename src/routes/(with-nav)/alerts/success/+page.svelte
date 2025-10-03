<script>
	import { Icon } from 'magnolia-ui-svelte';
</script>

<svelte:head>
	<title>Setting up Lovat Alerts | Lovat</title>
</svelte:head>

<section class="success">
	<div>
		<h1>Success!</h1>
		<p>
			You've added Lovat Alerts to Slack. Get started by setting your team number <code>
				/lovat team set [your team code]
			</code>
			and subscribing a channel <code> /lovat subscribe [no-auto | break]</code>.
		</p>
	</div>
	<a href="" target="_blank"
		><span>Learn more</span>
		<Icon icon="navigate_next" color="var(--victory-purple)" size={28} />
	</a>
</section>

<style>
	.success {
		height: 610px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		max-width: 500px;
		flex-direction: column;
	}
	a {
		display: flex;
		align-items: center;
		align-self: flex-start;
		text-decoration: none;
		color: var(--victory-purple);

		font-size: 17px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		margin-top: 10px;
	}
	.success {
		padding-left: 20px;
		padding-right: 20px;
	}
	h1 {
		color: var(--on-background);
		font-size: 44px;
		font-style: normal;
		font-weight: 500;
		line-height: 50px;
		margin-bottom: 8px;
	}

	a span {
		color: var(--victory-purple);
	}
	p {
		color: var(--body);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	a:visited {
		color: var(--victory-purple);
	}

	a span:hover {
		text-decoration: underline;
	}

	code {
		color: var(--body);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		background-color: var(--secondary-container);
		padding-left: 3px;
		padding-right: 3px;
		border-radius: 3px;
		margin-left: 1px;
		margin-right: 1px;
	}
</style>
