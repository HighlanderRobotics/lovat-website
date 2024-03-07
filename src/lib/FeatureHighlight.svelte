<script lang="ts">
	export let featureName: string;
	export let headline: string;
	export let body: string;
	export let image: string;
	export let firstDevice = false;

	let scrollY: number;
	let innerHeight: number;
	let content: HTMLElement;

	export let deviceWasVisible = firstDevice;
	export let deviceIsActive: boolean;

	function onScroll() {
		deviceWasVisible = firstDevice || content.getBoundingClientRect().y < innerHeight / 3;
	}
</script>

<svelte:window bind:scrollY bind:innerHeight on:scroll={onScroll} />

<div class="device" class:deviceIsActive>
	<img src="/assets/img/{image}" alt="Screenshot of Lovat's {featureName} feature" />
	<svg
		width="251"
		height="518"
		viewBox="0 0 251 518"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M58.9505 0H192.05C212.684 0 223.001 0 230.883 4.01576C237.815 7.54812 243.452 13.1845 246.984 20.1172C251 27.9986 251 38.3159 251 58.9505V458.401C251 479.036 251 489.353 246.984 497.234C243.452 504.167 237.815 509.804 230.883 513.336C223.001 517.352 212.684 517.352 192.05 517.352H58.9505C38.3159 517.352 27.9986 517.352 20.1172 513.336C13.1845 509.804 7.54812 504.167 4.01576 497.234C0 489.353 0 479.036 0 458.401V58.9504C0 38.3159 0 27.9986 4.01576 20.1172C7.54812 13.1845 13.1845 7.54812 20.1172 4.01576C27.9986 0 38.3159 0 58.9505 0ZM238.719 465.225V52.1266C238.719 38.5755 238.719 31.8 236.04 26.6427C233.782 22.2967 230.238 18.7531 225.892 16.4955C220.735 13.8165 213.96 13.8165 200.409 13.8165H193.602C190.964 13.8165 188.826 15.9548 188.826 18.5926C188.826 26.129 182.716 32.2385 175.18 32.2385H76.204C68.6676 32.2385 62.5581 26.129 62.5581 18.5926C62.5581 15.9548 60.4198 13.8165 57.782 13.8165H50.5915C37.0404 13.8165 30.2648 13.8165 25.1075 16.4955C20.7615 18.7531 17.2179 22.2967 14.9604 26.6427C12.2813 31.8 12.2813 38.5755 12.2813 52.1266V465.225C12.2813 478.776 12.2813 485.552 14.9604 490.709C17.2179 495.055 20.7615 498.599 25.1075 500.856C30.2648 503.535 37.0404 503.535 50.5915 503.535H200.409C213.96 503.535 220.735 503.535 225.892 500.856C230.238 498.599 233.782 495.055 236.04 490.709C238.719 485.552 238.719 478.776 238.719 465.225Z"
			fill="#050505"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M58.9505 0H192.05C212.684 0 223.001 0 230.883 4.01576C237.815 7.54812 243.452 13.1845 246.984 20.1172C251 27.9986 251 38.3159 251 58.9505V458.401C251 479.036 251 489.353 246.984 497.234C243.452 504.167 237.815 509.804 230.883 513.336C223.001 517.352 212.684 517.352 192.05 517.352H58.9505C38.3159 517.352 27.9986 517.352 20.1172 513.336C13.1845 509.804 7.54812 504.167 4.01576 497.234C0 489.353 0 479.036 0 458.401V58.9504C0 38.3159 0 27.9986 4.01576 20.1172C7.54812 13.1845 13.1845 7.54812 20.1172 4.01576C27.9986 0 38.3159 0 58.9505 0ZM238.719 465.225V52.1266C238.719 38.5755 238.719 31.8 236.04 26.6427C233.782 22.2967 230.238 18.7531 225.892 16.4955C220.735 13.8165 213.96 13.8165 200.409 13.8165H193.602C190.964 13.8165 188.826 15.9548 188.826 18.5926C188.826 26.129 182.716 32.2385 175.18 32.2385H76.204C68.6676 32.2385 62.5581 26.129 62.5581 18.5926C62.5581 15.9548 60.4198 13.8165 57.782 13.8165H50.5915C37.0404 13.8165 30.2648 13.8165 25.1075 16.4955C20.7615 18.7531 17.2179 22.2967 14.9604 26.6427C12.2813 31.8 12.2813 38.5755 12.2813 52.1266V465.225C12.2813 478.776 12.2813 485.552 14.9604 490.709C17.2179 495.055 20.7615 498.599 25.1075 500.856C30.2648 503.535 37.0404 503.535 50.5915 503.535H200.409C213.96 503.535 220.735 503.535 225.892 500.856C230.238 498.599 233.782 495.055 236.04 490.709C238.719 485.552 238.719 478.776 238.719 465.225Z"
			fill="url(#paint0_linear_261_78)"
			fill-opacity="0.2"
		/>
		<path
			d="M58.9505 0.5H192.05C202.375 0.5 210.089 0.500389 216.208 1.00031C222.321 1.49975 226.797 2.49528 230.656 4.46126C237.494 7.94569 243.054 13.5056 246.539 20.3442C248.505 24.2026 249.5 28.6792 250 34.7921C250.5 40.9108 250.5 48.6249 250.5 58.9505V458.401C250.5 468.727 250.5 476.441 250 482.56C249.5 488.672 248.505 493.149 246.539 497.008C243.054 503.846 237.494 509.406 230.656 512.89C226.797 514.856 222.321 515.852 216.208 516.351C210.089 516.851 202.375 516.852 192.05 516.852H58.9505C48.6249 516.852 40.9108 516.851 34.7921 516.351C28.6792 515.852 24.2026 514.856 20.3442 512.89C13.5056 509.406 7.94569 503.846 4.46126 497.008C2.49528 493.149 1.49975 488.673 1.00031 482.56C0.500389 476.441 0.5 468.727 0.5 458.401V58.9504C0.5 48.6249 0.500389 40.9108 1.00031 34.7921C1.49975 28.6792 2.49528 24.2026 4.46126 20.3442C7.94569 13.5056 13.5056 7.94569 20.3442 4.46126C24.2026 2.49528 28.6792 1.49975 34.7921 1.00031C40.9108 0.500389 48.6249 0.5 58.9505 0.5Z"
			stroke="url(#paint1_linear_261_78)"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M112.067 18.0382C112.067 16.9784 112.926 16.1193 113.986 16.1193H137.014C138.074 16.1193 138.933 16.9784 138.933 18.0382C138.933 19.098 138.074 19.9572 137.014 19.9572H113.986C112.926 19.9572 112.067 19.098 112.067 18.0382Z"
			fill="#B59AFF"
			fill-opacity="0.1"
		/>
		<circle cx="150.83" cy="18.0382" r="2.68654" fill="#B59AFF" fill-opacity="0.1" />
		<defs>
			<linearGradient
				id="paint0_linear_261_78"
				x1="125.5"
				y1="0"
				x2="125.5"
				y2="517.352"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#B59AFF" stop-opacity="0.49" />
				<stop offset="1" stop-color="#B59AFF" stop-opacity="0.17" />
				<stop offset="1" stop-color="#B59AFF" stop-opacity="0.17" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_261_78"
				x1="125.5"
				y1="0"
				x2="125.5"
				y2="517.352"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#726A87" />
				<stop offset="1" stop-color="#201F22" />
			</linearGradient>
		</defs>
	</svg>
</div>

<section class="feature-highlight" bind:this={content}>
	<div class="content">
		<div class="feature-name">{featureName}</div>
		<h2>{headline}</h2>
		<p>{body}</p>
	</div>
</section>

<style>
	.feature-highlight {
		display: flex;
		align-items: center;
		min-height: 70vh;
		z-index: 10;
	}

	.content {
		margin-left: auto;
		margin-right: auto;
		padding-left: 301px;
		padding-right: 25px;
		max-width: 900px;
	}

	.feature-name {
		display: flex;
		padding: 4px 10px;
		align-items: flex-start;
		gap: 10px;

		border-radius: 100px;
		border: 1px solid var(--victory-purple);
		color: var(--victory-purple);

		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.84px;
		text-transform: uppercase;

		width: fit-content;
	}

	h2 {
		margin-top: 18px;
		margin-bottom: 18px;

		color: var(--on-background);
		font-size: 40px;
		font-style: normal;
		font-weight: 500;
		line-height: 45px; /* 112.5% */
	}

	p {
		color: var(--body);

		/* Body/Medium */
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.device {
		opacity: 0%;
		transition: 0.3s;

		width: 251px;
		display: grid;
		place-content: center;
		margin-right: 50px;
		box-shadow: 0px 0px 100px rgba(181, 154, 255, 0.15);

		position: sticky;
		top: calc(50vh - 517.35px);
		border-radius: 48px;
		transform: translateY(50%);
		/* position: relative; */

		margin-right: 599px;

		z-index: 5;
	}

	.deviceIsActive {
		opacity: 100%;
	}

	:global(.feature-scroller > .deviceVisible:last-of-type ~ .deviceVisible) {
		opacity: 0%;
	}

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		width: 227px;
		pointer-events: none;
	}

	svg {
		pointer-events: none;
		z-index: 4;
	}

	@media (max-width: 900px) {
		.device {
			margin-right: 0;
			margin-left: 25px;
		}
	}

	@media (max-width: 570px) {
		.device {
			position: relative;
			top: unset;
			transform: unset;
			opacity: 100%;

			/* margin-bottom: 50px; */
			margin-left: 0;
		}

		.feature-highlight {
			min-height: auto;
			padding: 59px 30px 120px 30px;
		}

		.content {
			padding-left: 0px;
			padding-right: 0px;
		}
	}
</style>
