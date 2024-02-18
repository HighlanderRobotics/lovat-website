<script lang="ts">
	import { enhance } from "$app/forms";
	import { Button, TextField } from "magnolia-ui-svelte";

    let submitClicked = false;
</script>

<svelte:head>
    <title>Delete my Lovat Collection account | Lovat</title>
</svelte:head>

<section class="info">
    <div class="content">
        <h1>Delete my account</h1>
        <p>Submit your details here to request to delete your account for Lovat Collection. This will delete your account and all associated personal data from our records. This can take up to 72 hours, and we will send you an email update upon completion.</p>
    </div>
</section>
<section class="form">
    <form method="POST" use:enhance on:submit={() => submitClicked = true}>
        <label for="name">Name</label>
        <TextField name="name" id="name" placeholder="Woodie Flowers" required />
        <p>The name of your account in Lovat Collection.</p>

        <label for="team">Team Number <span class="gray">(optional)</span></label>
        <TextField name="team" id="team" placeholder="8033" required />
        <p>The number of the team you are registered as a scouter for.</p>

        <label for="email">Email</label>
        <TextField name="email" id="email" type="email" placeholder="woodie.flowers@firstinspires.org" required />
        <p>We will use this to send updates about the deletion of your account.</p>

        <div class="submit">
            <Button disabled={submitClicked}>
                Submit
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

    .info p {
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

    form p {
        font-size: 14px;
        color: var(--body);
        margin-top: 8px;
    }

    .submit {
        margin-top: 50px;
        margin-left: auto;
    }
</style>