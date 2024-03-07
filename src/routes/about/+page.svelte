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
			The Lovat Scouts was a British Army unit first formed during the Second Boer War as a Scottish
			Highland yeomanry regiment. They were the first known military unit to wear a ghillie suit,
			and were renowned for their elite reconnaissance capabilities.
		</p>
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
		background: linear-gradient(180deg, rgba(59, 53, 74, 0.5) 0%, #292929 100%);
		box-shadow: 0px 0px 200px 0px rgba(181, 154, 255, 0.4);
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

	.definition h1 {
		height: 60px;
		pointer-events: none;
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
