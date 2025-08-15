<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, TextField } from 'magnolia-ui-svelte';

	let submitClicked = false;
	let teamValue = '';
	let teamError = '';

	// Reactive validation - runs whenever teamValue changes
	$: {
		if (teamValue.trim() === '') {
			teamError = ''; // No error for empty (optional field)
		} else {
			const teamNum = parseInt(teamValue);
			if (isNaN(teamNum)) {
				teamError = 'Must be a number';
			} else {
				teamError = ''; // Valid number
			}
		}
	}
</script>

<svelte:head>
	<title>Contact | Lovat</title>
</svelte:head>

<section class="info">
	<div class="content">
		<h1>Get in touch</h1>
		<p>
			If you have questions about Lovat, find bugs, or have feature requests, shoot us a message and
			we’ll get back to you as soon as we can.
		</p>
	</div>
</section>
<section class="form">
	<form method="POST" use:enhance on:submit={() => (submitClicked = true)}>
		<label for="name">Name</label>
		<TextField name="name" id="name" placeholder="Woodie Flowers" required />

		<label for="email">Email</label>
		<TextField
			name="email"
			id="email"
			type="email"
			placeholder="woodie.flowers@firstinspires.org"
			required
		/>

		<label for="team">Team Number <span class="gray">(optional)</span></label>
		<TextField
			name="team"
			id="team"
			placeholder="8033"
			bind:value={teamValue}
			errorMessage={teamError || null}
		/>

		<label for="message">Message</label>
		<textarea name="message" id="message" placeholder="I would love to see..." required />

		<div class="submit">
			<Button disabled={submitClicked || !!teamError}>Send</Button>
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

	textarea {
		appearance: none;
		resize: vertical;
		background-color: var(--secondary-container);
		border-radius: 7px;
		border: 2px solid var(--light-gray);
		padding: 10px 14px;

		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		outline: none;
		caret-color: var(--victory-purple);
		margin-bottom: 20px;
		height: 120px;
		transition: 100ms;
	}

	textarea::placeholder {
		color: var(--placeholder);
	}

	textarea:focus {
		border: 2px solid var(--light-gray-hover);
	}

	.submit {
		margin-left: auto;
	}
</style>
