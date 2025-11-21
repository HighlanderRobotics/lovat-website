<section>
	<div class="flex-row">
		<div class="column">
			<h1>100,000+</h1>
			<p>Reefscape scout reports</p>
		</div>
		<div class="column">
			<h1>600+</h1>
			<p>registered teams</p>
		</div>
		<div class="column">
			<h1>10,600+</h1>
			<p>users & scouters registered</p>
		</div>
	</div>
</section>

<style>
	.flex-row {
		display: flex;
		margin: 0 auto;
		max-width: 1000px;
		padding: 59px 24px;
	}
	.column {
		flex: 1;
		text-align: center;
	}

	h1 {
		font-style: normal;
		font-weight: 500;
		font-size: 50px;
		line-height: 50px;
		margin-bottom: 10px;
	}

	p {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;

		color: var(--body);
	}

	section {
		background-color: var(--secondary-container);
	}

	@media (max-width: 700px) {
		.flex-row {
			flex-direction: column;
			gap: 24px;
		}
	}
</style>
