<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, TextField } from 'magnolia-ui-svelte';

	let submitClicked = false;
</script>

<svelte:head>
	<title>Get updates | Lovat</title>
</svelte:head>

<section class="info">
	<div class="content">
		<h1>Be the first to hear</h1>
		<p>
			The team is hard at work rebuilding Lovat for the 2026 game. It will be released by February
			19th. Subscribe to get updates on progress and opportunities to test the system.
		</p>
	</div>
</section>
<section class="form">
	<form method="POST" use:enhance on:submit={() => (submitClicked = true)}>
		<label for="email">Email</label>
		<TextField
			name="email"
			id="email"
			type="email"
			placeholder="woodie.flowers@firstinspires.org"
			required
		/>

		<label for="team">Team Number <span class="gray">(optional)</span></label>
		<TextField name="team" id="team" placeholder="8033" />

		<div class="submit">
			<Button disabled={submitClicked}>Sign up</Button>
		</div>
	</form>
</section>

<style>
	.info {
		background-color: var(--secondary-container);
		padding: 70px 20px;
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

	p {
		color: var(--body);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	form {
		display: flex;
		flex-direction: column;
		max-width: 500px;
		margin: 30px auto;
		padding: 0 20px;
	}

	label {
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-bottom: 7px;
		margin-top: 14px;
	}

	.gray {
		color: var(--body);
	}

	.submit {
		margin-left: auto;
		margin-top: 20px;
	}
</style>
