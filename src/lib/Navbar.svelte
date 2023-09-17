<script>
	import { Button } from "magnolia-ui-svelte"
</script>
<nav>
        <img src="assets/img/logo.png" alt="8033">
        <h1> LOVAT </h1>
    <div>
        <Button variant="text-only"> About </Button>
        <Button variant="text-only"> Blog </Button>
        <Button variant="secondary"> Get Started </Button>
        
    </div>
</nav>

<style>
    img {
        margin-left: 16px;
        margin-top: 19px;
        width: 93px;
        height: 27px;
    }
    
    nav {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    div {
        display: flex;
        justify-content: center;
    }

    h1 {
        display: flex;
        color: var(--victory-purple, #B59AFF);
        font-family: Heebo;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 2.25px;
        text-transform: uppercase;
        padding-top: 10px;
        padding-left: 60px;
        align-items: center;
        justify-content: center;
    }


</style>