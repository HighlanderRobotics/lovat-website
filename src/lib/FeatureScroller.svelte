<script lang="ts">
	import FeatureHighlight from './FeatureHighlight.svelte';

	let visibleDevices = [
		true,
		false,
		false,
		false,
		false,
	];
</script>

<div class="feature-scroller">
	<FeatureHighlight
		featureName="Team Lookup"
		headline="Everything in one place."
		body="Tap or type a team to instantly access averaged stats, notes and breakdown metrics. Tap a category for more details, from sparklines to contribution breakdowns."
		image="team-lookup.png"
		firstDevice
		bind:deviceWasVisible={visibleDevices[0]}
		deviceIsActive={visibleDevices?.findLastIndex(v => v) === 0}
	/>
    <FeatureHighlight
		featureName="My Alliance"
		headline="Coordinate, collaborate, dominate."
		body="Spot your alliance’s strengths and weaknesses. Avoid conflicts by planning and visualizing auto paths with our auto path visualizer."
		image="my-alliance.png"
		bind:deviceWasVisible={visibleDevices[1]}
		deviceIsActive={visibleDevices?.findLastIndex(v => v) === 1}
	/>
    <FeatureHighlight
		featureName="Match Prediction"
		headline="Predict the future to change the future."
		body="Adjust your strategy based on a variety of predictions. Quickly spot other alliances weaknesses by flipping in between the red and blue alliance."
		image="match-predictor.png"
		bind:deviceWasVisible={visibleDevices[2]}
		deviceIsActive={visibleDevices?.findLastIndex(v => v) === 2}
	/>
    <FeatureHighlight
		featureName="Dynamic Picklists"
		headline="Perfect your picklist."
		body="Drag and drop the sliders to make one of 10^15 possible custom picklists. Then share with your team with the tap of a button."
		image="picklist.png"
		bind:deviceWasVisible={visibleDevices[3]}
		deviceIsActive={visibleDevices?.findLastIndex(v => v) === 3}
	/>
    <FeatureHighlight
		featureName="Mutable Picklists"
		headline="Test and tune."
		body="Convert it to a mutable picklist to drag and drop teams into a different order, instantly updating your team with the changes without sharing a spreadsheet."
		image="mutable-picklist.png"
		bind:deviceWasVisible={visibleDevices[4]}
		deviceIsActive={visibleDevices?.findLastIndex(v => v) === 4}
	/>
</div>
<div class="space" />

<style>
	.feature-scroller {
		background-color: var(--secondary-container);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.space {
		height: 400px;
		background-color: var(--secondary-container);
	}

	@media (max-width: 900px) {
        .feature-scroller {
			align-items: start;
		}
	}

	@media (max-width: 570px) {
        .feature-scroller {
			align-items: center;
			padding-top: 60px
		}

		.space {
			display: none;
		}
	}
</style>
