<script>
	import { Button } from "magnolia-ui-svelte";

</script>

<svelte:head>
    <title>Contact | Lovat</title>
</svelte:head>

<div class="container">
    <div class="content">
        <h1>Submitted</h1>
        <p>Your request has been submitted. Your account and all associated personal information will be deleted within 72 hours and we will contact you by email with updates.</p>
        <Button element="a" href="/">Home</Button>
    </div>
</div>

<style>
    .container {
        display: grid;
        place-content: center;
        height: 80vh;
    }

    .content {
        margin: 0 auto;
        padding: 20px;

        max-width: 460px;
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
        margin-bottom: 20px;
    }
</style>