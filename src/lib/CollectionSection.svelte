<script lang="ts">
	import Phone from '$lib/components/Phone.svelte';
</script>

<section>
    <div class="content">
        <div class="phone">
            <Phone
				src="/assets/img/"
				alt="Screenshot of "
				orientation="landscape-left"
			/>
        </div>

        <div class="blurb">
            <h1>Scouting built for scouters.</h1>
            <p class="side-paragraph">
				The app presents only the actions the robot is capable of in the moment, minimizing distractions and eliminating the need to look away from the field.
			</p>
        </div>
    </div>
</section>

<style>
    .content {
        padding: 59px;
    }

    .phone {
        max-width: 517.35px;
        margin: 0 auto;
    }
    
    .blurb {
        margin: 50px auto;
        max-width: 487px;
    }

    section {
        background-color: var(--secondary-container);
    }
</style>
