<script lang="ts">
	import Phone from '$lib/components/Phone.svelte';
	import { Icon } from 'magnolia-ui-svelte';
</script>

<svelte:head>
	<title>Lovat Collection | Lovat</title>
</svelte:head>

<section class="front-page">
	<div class="content-wrapper">
		<div class="header">
			<img
				class="icon"
				src="/assets/img/collection-icon.png"
				alt="Screenshot of Lovat's Collection icon."
			/>
			<h1>Lovat Collection</h1>
		</div>
		<a href="/collection/download" class="forward-link">
			<span>Download</span>
			<Icon icon="navigate_next" color="var(--victory-purple)" size={28} />
		</a>
	</div>
</section>

<section class="video">
	<div class="video-content">
		<h1>Training video</h1>
		<iframe
			src="https://www.youtube-nocookie.com/embed/aebdSmZ6o_Q?si=vQmOmqief3Y2QvGo"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
		<br />
		<p>
			This video covers every single feature in Lovat&nbsp;Collection including onboarding,
			settings, all the game screens, and more. It is crucial that every single scouter watches this
			video in its entirety. All the resources below are covered in the video, and are just there to
			serve as reminders, not as alternate training materials.
		</p>
	</div>
</section>

<section class="onboarding">
	<div class="onboarding-content">
		<h1>Onboarding</h1>
		<div class="phone-row">
			<div class="phone-column">
				<Phone
					src="/assets/img/onboarding-1.PNG"
					alt="Screenshot displaying the team code portion of Lovat Collection's onboarding flow"
				/>
				<p>
					Get your team code from your scouting lead. If they have not already registered your team
					on Lovat&nbsp;Dashboard, instruct them to do so.
				</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/onboarding-2.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>Select your name if it appears. If it isn’t there, follow the next step.</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/onboarding-3.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>If you are not already in the list, type in your name and tap “Create new scouter.”</p>
			</div>
		</div>
	</div>
</section>

<section class="info">
	<div class="game-screen">
		<h1>Game Screen</h1>
		<h2>Starting</h2>
		<div class="starting-content">
			<Phone
				src="/assets/img/starting-note.PNG"
				alt="Screenshot of Lovat Collection's data collection screen prompting the user to select a starting position"
				orientation="landscape-left"
			/>
			<p class="side-paragraph">
				Before the match starts, select one of the four starting positions for the robot, and
				indicate whether it starts with a note in the upper left. Immediately as the match starts,
				tap the <Icon icon="play_arrow" />
				button in the top right corner.
			</p>
		</div>
	</div>
	<div class="general-features">
		<h2>General Features</h2>
		<p>
			If you make a mistake, you can use the <Icon icon="undo" /> button in the upper left corner. In
			the top right you can see the team number you are tracking, whether it is auto, teleop, or pre-match,
			and a button play button to tap when the match starts, and a stop button for when the match ends.
		</p>
	</div>
	<div class="auto">
		<h2>Auto</h2>
		<Phone
			src="/assets/img/auto-1.PNG"
			alt="Screenshot of Lovat Collection's data collection screen at the very start of the autonomous period"
			orientation="landscape-left"
		/>
		<p class="side-paragraph">
			During the autonomous period, if the robot you are scouting scores in the amp, use the button
			at the edge. If it scores in the speaker, use the <Icon icon="speaker" /> button in the middle,
			and if the robot drops the note, use the <Icon icon="output_circle" /> button. If the robot leaves
			the auto starting zone, tap anywhere in the purple box.
		</p>
		<Phone
			src="/assets/img/auto-2.PNG"
			alt="Screenshot of Lovat Collection's data collection screen displaying locations for note collection"
			orientation="landscape-left"
		/>
		<p class="side-paragraph">
			If the robot leaves the auto starting area and doesn’t have a note, there are 8 yellow <Icon
				icon="upload"
			/> buttons corresponding to the action of collecting a note from one of the 8 locations.
		</p>
	</div>
	<div class="teleop">
		<h2>Teleop</h2>
		<Phone
			src="/assets/img/teleop-1.PNG"
			alt="Screenshot of Lovat Collection's data collection screen during the teleoperated period. The robot does not currently have a note."
			orientation="landscape-left"
		/>
		<p class="side-paragraph">
			During the teleop phase, if the robot does not have a note, you will have one larger yellow <Icon
				icon="upload"
			/> button to indicate the robot collecting a note from anywhere. If the robot is actively defending,
			tap the
			<Icon icon="shield" /> button, and if the robot's alliance amplifies, tap the <Icon
				icon="campaign"
			/> button.
		</p>
		<Phone
			src="/assets/img/teleop-2.PNG"
			alt="Screenshot of Lovat Collection's data collection screen during the teleoperated period. The robot currently has a note."
			orientation="landscape-left"
		/>
		<p class="side-paragraph">
			Just like in auto, if the robot has a note, you can score in either the amp at the edge or the
			speaker in the middle. If the robot scores in the trap, tap the <Icon icon="crisis_alert" /> in
			the middle. If the robot drops its note, tap the <Icon icon="output_circle" /> button. On the side,
			you still have amplification and defense buttons, but you can also tap the <Icon
				icon="conveyor_belt"
			/> when the robot feeds its note to another robot in its alliance.
		</p>
		<Phone
			src="/assets/img/amplified.jpeg"
			alt="Screenshot of Lovat Collection's data collection screen during the teleoperated period. The robot currently has a note, and its alliance is amplified"
			orientation="landscape-left"
		/>
		<p class="side-paragraph">
			The amplify button glows while it is activated. If the alliance is no longer amplified but the
			button is still glowing, tap it again to deactivate it.
		</p>
	</div>
	<div class="single-info">
		<div class="post-row">
			<div class="left-phone">
				<Phone
					src="/assets/img/post-match.PNG"
					alt="Screenshot of Lovat Collection's post match screen"
				/>
			</div>
			<div class="right-phone">
				<h2>Post Match</h2>
				<p>
					After the match you will answer some questions about the robot in the match. For example,
					whether the robot was defensive, offensive, or immobile or if they scored the high note,
					failed, or didn’t attempt.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="uploading">
	<div class="uploading data">
		<h2 class="uploading-align">Uploading Data</h2>
		<div class="phone-row uploading-content">
			<div class="phone-column">
				<Phone
					src="/assets/img/uploading-1.PNG"
					alt="Screenshot of Lovat Collection's data upload page indicating that the data has been successfully uploaded."
				/>
				<p class="uploading-text">
					An indicator will appear below the QR code if your data uploads successfully. If it does,
					tap "done" and continue on to scout the next match.
				</p>
			</div>
			<div class="phone-column">
				<Phone
					src="/assets/img/uploading-2.PNG"
					alt="Screenshot of Lovat Collection's data upload page indicating that the data upload has failed."
				/>
				<p class="uploading-text">
					If the indicator says "Upload failed," ask your scouting lead to scan the QR code, or if
					they are not available, tap done and use the history page <Icon icon="history" /> to upload
					it later.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="settings">
	<div class="single-info">
		<div class="post-row">
			<div class="left-phone">
				<Phone
					src="/assets/img/settings-collection.PNG"
					alt="Screenshot of Lovat Collection's post match screen"
				/>
			</div>
			<div class="right-phone">
				<h2>Settings</h2>
				<p>
					You can set the field orientation based on which side of the field you're sitting on.
					Select auspicious for blue on the left, and sinister for red on the left. You can also
					select the tournament you're at. Enable training mode if you are testing the app or
					training scouters and want to use it without uploading data. It will disable the submit
					button in the post match screen and force you to discard any data you record. At the
					bottom of the page you can delete all settings and stored data and reset the app to its
					initial state.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.left-phone {
		flex: 1;
		max-width: 250px;
	}

	.right-phone {
		flex: 1;
	}

	iframe {
		border-radius: 14px;
		aspect-ratio: 560 / 315;
		width: 100%;
	}

	.video {
		background-color: var(--secondary-container);
	}

	section {
		padding: 20px;
	}

	.video-content {
		max-width: 550px;
		margin: 0 auto;
	}
	div {
		padding-top: 2px;
		padding-bottom: 2px;
	}
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	h1 {
		font-size: 45px;
		font-style: normal;
		font-weight: 500;
		line-height: 45px; /* 100% */
		margin-top: 25px;
		margin-bottom: 25px;
	}
	h2 {
		font-size: 32px;
		font-weight: 500;
		color: var(--body);
		margin-bottom: 50px;
	}
	p {
		margin-top: 20px;
		margin-bottom: 24px;
		color: var(--body);
	}
	.icon {
		height: 65px;
		width: 65px;
		margin-right: 15px;
		border: 1px solid rgba(129, 83, 182, 0.505);
		border-radius: 10px;
		background: linear-gradient(180deg, rgba(59, 53, 74, 0.5) 0%, #292929 100%);
		box-shadow: 0px 0px 100px 0px rgba(181, 154, 255, 0.4);
	}

	.info {
		background-color: var(--secondary-container);
	}

	.settings {
		background-color: var(--secondary-container);
	}
	.phone-row {
		text-align: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		gap: 28px;
	}

	.phone-row > * {
		max-width: 280px;
		flex: 1;
	}
	.phone-column {
		max-width: 518px;
	}
	.onboarding-content,
	.game-screen {
		max-width: 1000px;
		margin: 0 auto;
	}
	.info > * {
		max-width: 525px;
		margin: 0 auto;
	}
	.side-paragraph {
		max-width: 518px;
		margin-bottom: 50px;
		text-align: left;
	}
	.post-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}
	.uploading-content {
		max-width: 600px;
		margin: 0 auto;
	}
	.uploading-align {
		max-width: 550px;
		margin: 50px auto;
	}
	.uploading-text {
		text-align: center;
		margin: 0 auto;
		max-width: 255px;
	}

	.single-info h2 {
		margin-bottom: 7px;
	}

	.single-info p {
		margin: 0;
	}

	.single-info {
		max-width: 600px;
		margin: 0 auto;
	}
	.forward-link {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: var(--victory-purple);

		font-size: 17px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	.forward-link span {
		color: var(--victory-purple);
	}

	.forward-link:visited {
		color: var(--victory-purple);
	}

	.forward-link:hover span {
		text-decoration: underline;
	}

	.content-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px 0;
	}

	@media only screen and (max-width: 650px) {
		.phone-row {
			flex-direction: column;
			max-width: 251px;
		}

		.header {
			flex-direction: column;
		}

		.post-row {
			flex-direction: column;
		}

		.left-phone {
			flex: none;
			width: 100%;
		}
	}
</style>
