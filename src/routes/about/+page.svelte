<svelte:head>
    <title>About | Lovat</title>
</svelte:head>

<section class="definition">
    <div class="content">
        <a href="https://en.wikipedia.org/wiki/Lovat_Scouts" target="_blank">From Wikipedia</a>
        <h1>
            <span class="name">Lovat</span>
            <span class="phonetic">/ˈləvət/</span>
        </h1>
        <p>
            The Lovat Scouts was a British Army unit first formed during the Second Boer War as a Scottish Highland yeomanry regiment. They were the first known military unit to wear a ghillie suit, and were renowned for their elite reconnaissance capabilities.
        </p>
    </div>
</section>
<section class="about">
    <div class="content">
        <div class="text">
            <p>8033’s scouting system was initiated by freshmen Jacob Trentini and Collin Cameron, who recognized the need for an effective scouting system at the off-season competition Chezy Champs 2022 and saw its potential in aiding teams’ strategic decisions during competitions. Joined by freshman Cassie Colby and seniors Jasper Tripp and Barry Balasingham, they set off to create a comprehensive scouting system for the 2023 season. Each member was assigned to a specific role. Jacob created the data collection app, Cassie, the Scouting lead, handled the analysis and a portion of the backend work, Collin made the dashboard app, Jasper, the Strategy lead, worked on the mathematical analysis for the system, and Barry worked on the server.</p>
            <p>Over the 2023 season, the scouting software team built and iterated on the system. Finally, after months of hard work we opened up the dashboard app with Galileo data at the 2023 World Championship. We received lots of positive feedback about the system and soon after were joined by two new members: Sophie and Olivia. Sophie Bowyer will work on the backend, and Olivia will work on the frontend of the Collection app. Together we decided to spend the next year making Lovat as polished and accessible to other teams as possible.</p>
            <p>We look forward to documenting our journey and sharing Lovat in the 2024 season!</p>
        </div>
        <div class="signatures">

        </div>
    </div>
</section>

<style>
    .definition {
        height: 610px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .definition .content {
        max-width: 444px;

        padding: 15px;
        margin: 15px;
        border-radius: 5px;
        border: 1px solid rgba(214, 198, 255, 0.35);
        background: linear-gradient(180deg, rgba(59, 53, 74, 0.50) 0%, #292929 100%);
        box-shadow: 0px 0px 200px 0px rgba(181, 154, 255, 0.40);
    }

    .definition .content a {
        color: var(--victory-purple);

        /* Body/Small */
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: none;
    }

    .definition .content a:hover {
        text-decoration: underline;
    }

    .definition .name {
        color: var(--on-background);
        font-size: 60px;
        font-style: normal;
        font-weight: 500;
        line-height: 60px; /* 100% */
    }

    .definition .phonetic {
        color: var(--body);
        font-size: 45px;
        font-style: normal;
        font-weight: 400;
        line-height: 60px;
    }

    .definition p {
        color: var(--body);

        /* Body/Small */
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .about {
        background-color: var(--secondary-container);
        padding: 88px 20px;
    }

    .about .content {
        max-width: 675px;
        margin: 0 auto;

        color: var(--body);

        /* Body/Medium */
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .about p {
        margin-bottom: 1em;
    }

    @media (max-width: 630px) {
        .about {
            padding: 20px;
        }
    }
</style>