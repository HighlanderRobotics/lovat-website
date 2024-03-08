<script lang="ts">
	import { Icon } from 'magnolia-ui-svelte';
</script>

<svelte:head>
	<title>Delete my Lovat Collection account | Lovat</title>
</svelte:head>

<section class="info">
	<div class="content">
		<h1>Delete my account</h1>
		<p>Use these steps to delete your account in Lovat&nbsp;Dashboard.</p>
		<ol>
			<li>Open Lovat&nbsp;Dashboard.</li>
			<li>Sign in if necessary.</li>
			<li>Tap the <Icon icon="menu" grade={-25} /> icon in the upper left.</li>
			<li>Tap the <Icon icon="settings" filled grade={-25} /> icon to access settings.</li>
			<li>At the bottom of the page, tap "Reset app and delete settings"</li>
			<li>Select "Delete my account"</li>
			<li>Tap "Delete"</li>
		</ol>
	</div>
</section>

<style>
	.info {
		padding: 20px 20px;
	}

	.info .content {
		max-width: 460px;
		margin: 0 auto;
	}

	h1 {
		color: var(--on-background);
		font-size: 44px;
		font-style: normal;
		font-weight: 500;
		line-height: 50px;
		margin-bottom: 8px;
	}

	.info p,
	li {
		color: var(--body);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	ol {
		counter-reset: ol;
		margin-top: 16px;
	}

	li {
		display: flex;
		gap: 1ch;
	}

	li::before {
		counter-increment: ol;
		content: counter(ol) '.';
	}
</style>
