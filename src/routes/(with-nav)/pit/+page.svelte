<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, TextField } from 'magnolia-ui-svelte';

	let submitClicked = false;
</script>

<svelte:head>
	<title>Pit | Lovat</title>
</svelte:head>

<section class="info">
	<div class="content">
		<h1>Pit display</h1>
		<p>
			Watch a live feed of the field and monitor upcoming matches at your tournament in real time, enhanced with data from Lovat.
		</p>
	</div>
</section>
<section class="form">
	<form method="GET" action="/pit/display" use:enhance on:submit={() => (submitClicked = true)}>
		<label for="tournamentKey">Tournament Key</label>
		<TextField name="tournamentKey" id="tournamentKey" placeholder="2023cmptx" required />

		<label for="team">Team Number</label>
		<TextField name="team" id="team" placeholder="8033" required />

        <label for="queueMatchCount">Match buffer to start queueing</label>
		<TextField name="queueMatchCount" id="queueMatchCount" placeholder="3" type="number" required />

        <label for="topTeamCount">Top ranked teams to show</label>
		<TextField name="topTeamCount" id="topTeamCount" placeholder="5" type="number" required />

        <label for="teamsAboveCount">Teams above yours to show in rankings</label>
		<TextField name="teamsAboveCount" id="teamsAboveCount" placeholder="3" type="number" required />

		<div class="submit">
			<Button disabled={submitClicked}>Open</Button>
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

	.submit {
        margin-top: 20px;
		margin-left: auto;
	}
</style>
