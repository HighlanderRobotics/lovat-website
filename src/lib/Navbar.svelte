<script>
	import { onNavigate } from "$app/navigation";
	import { Button, DensityProvider, Icon } from "magnolia-ui-svelte"

    let expanded = false;

    onNavigate(() => {
        expanded = false
    })
</script>
<nav>
    <a href="https://frc8033.com/" target="_blank">
        <img src="/assets/img/logo.png" alt="8033">
    </a>
    <a class="main-title" href="/">Lovat</a>
    <button class="menu-button" on:click={() => expanded = !expanded}>
        <Icon icon="menu" />
    </button>
    <DensityProvider density="compact">
        <div class="actions" class:expanded>
            <Button variant="text-only-secondary" element="a" href="/dashboard">Dashboard</Button>
            <Button variant="text-only-secondary" element="a" href="/collection">Collection</Button>
            <Button variant="text-only-secondary" element="a" href="/about">About</Button>
            <Button variant="text-only-secondary" element="a" href="/contact">Contact</Button>
            <Button variant="secondary" element="a" href="/dashboard/download">Get Lovat Dashboard</Button>
        </div>
    </DensityProvider>
</nav>

<style>
    img {
        width: 93px;
        height: 27px;
    }
    
    nav {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;

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

    @media (max-width: 800px) {
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
    }
</style>