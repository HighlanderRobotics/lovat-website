<script lang="ts">
	import FeatureHighlight from './FeatureHighlight.svelte';
</script>

<div class="feature-scroller">
	<FeatureHighlight
		featureName="Team Lookup"
		headline="Everything in one place."
		body="Tap or type a team to instantly access averaged stats, notes and breakdown metrics. Tap a category for more details, from sparklines to contribution breakdowns."
	/>
    <FeatureHighlight
		featureName="My Alliance"
		headline="Coordinate, collaborate, dominate."
		body="Spot your alliance’s strengths and weaknesses. Avoid conflicts by planning and visualizing auto paths with our auto path visualizer."
	/>
    <FeatureHighlight
		featureName="Match Prediction"
		headline="Predict the future to change the future."
		body="Adjust your strategy based on a variety of predictions. Quickly spot other alliances weaknesses by flipping in between the red and blue alliance."
	/>
    <FeatureHighlight
		featureName="Dynamic Picklists"
		headline="Perfect your picklist."
		body="Drag and drop the sliders to make one of 10^15 possible custom picklists. Then share with your team with the tap of a button."
	/>
    <FeatureHighlight
		featureName="Mutable Picklists"
		headline="Test and tune."
		body="Convert it to a mutable picklist to drag and drop teams into a different order, instantly updating your team with the changes without sharing a spreadsheet."
	/>
</div>

<style>
	.feature-scroller {
		background-color: var(--secondary-container);
	}
</style>
