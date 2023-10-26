<script lang="ts">
	import { enhance } from "$app/forms";
	import { Button, TextField } from "magnolia-ui-svelte";

    let submitClicked = false;
</script>

<svelte:head>
    <title>Join the Waitlist | Lovat</title>
</svelte:head>

<section class="info">
    <div class="content">
        <h1>Be the first to hear</h1>
        <p>The full Lovat system, including Lovat Dashboard and Lovat Collection  with all features will release for the 2024 Crescendo season. Join the waitlist to stay updated on the development and opportunities to try out the system.</p>
    </div>
</section>
<section class="form">
    <form method="POST" use:enhance on:submit={() => submitClicked = true}>
        <label for="email">Email</label>
        <TextField name="email" id="email" type="email" placeholder="woodie.flowers@firstinspires.org" required />

        <label for="team">Team Number <span class="gray">(optional)</span></label>
        <TextField name="team" id="team" placeholder="8033" />

        <div class="submit">
            <Button disabled={submitClicked}>
                Sign up
            </Button>
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
        margin-top: 20px;
    }
</style>