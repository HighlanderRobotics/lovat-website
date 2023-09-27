<script>
	import CallToAction from "$lib/CallToAction.svelte";
import FeatureScroller from "$lib/FeatureScroller.svelte";


	import Hero from "$lib/Hero.svelte";
	import MiscFeatures from "$lib/MiscFeatures.svelte";

</script>

<svelte:head>
	<title>Lovat — Centralize your team's strategy in minutes</title>
	<meta name="title" content="Lovat — Centralize your team's strategy in minutes" />
	<meta name="description" content="Lovat is a scouting system that makes it easy to collaboratively strategize in FRC using a variety of statistics and predictions." />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://lovat.app/" />
	<meta property="og:title" content="Lovat — Centralize your team's strategy in minutes" />
	<meta property="og:description" content="Lovat is a scouting system that makes it easy to collaboratively strategize in FRC using a variety of statistics and predictions." />
	<meta property="og:image" content="/assets/img/social-banner.png" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://lovat.app/" />
	<meta property="twitter:title" content="Lovat — Centralize your team's strategy in minutes" />
	<meta property="twitter:description" content="Lovat is a scouting system that makes it easy to collaboratively strategize in FRC using a variety of statistics and predictions." />
	<meta property="twitter:image" content="/assets/img/social-banner.png" />
</svelte:head>

<Hero />
<FeatureScroller />
<MiscFeatures />
<CallToAction/>