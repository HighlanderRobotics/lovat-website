<script lang="ts">
	import Phone from '$lib/components/Phone.svelte';
	import { Icon } from 'magnolia-ui-svelte';
</script>

<svelte:head>
	<title>Lovat Dashbaord | Lovat</title>
</svelte:head>

<section class="front-page">
	<div class="content-wrapper">
		<div class="header">
			<img
				class="icon"
				src="/assets/img/dashboard-icon.png"
				alt="Screenshot of Lovat's Dashboard icon."
			/>
			<h1>Lovat Dashboard</h1>
		</div>
		<p>For analysts</p>
	</div>
</section>

<section class="video">
	<div class="video-content">
		<iframe
			src="https://www.youtube.com/embed/KfoBazx2k-s?si=gFd7oIkMspGZIFdd"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</section>

<section class="onboarding">
	<div class="onboarding-content">
		<h2>Onboarding</h2>
		<div class="phone-row">
			<div class="phone-column">
				<Phone
					src="/assets/img/dash-onboarding-1.png"
					alt="Screenshot displaying the team code portion of Lovat Collection's onboarding flow"
				/>
				<p>
					When you first get to the Lovat dashboard app you will see a “Get Started” button that you
					will have to tap to move on.
				</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/dash-onboarding-2.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>You can then sign in, or create an account if you don’t have one already.</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/dash-onboarding-3.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>Next choose a name that your team will use to identify you.</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/dash-onboarding-4.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>Then search for your team, or indicate if you’re not on one.</p>
			</div>
		</div>

		<div class="phone-row">
			<div class="phone-column">
				<Phone
					src="/assets/img/dash-onboarding-5.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>
					If your team has already been registered by your scouting lead, ask them for your team
					code and enter it here. If your team isn’t registered with Lovat yet, tap “Just looking
					around”.
				</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/data-onboarding.png"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>
					This will take you to a page that has 3 options about where you want your data to come
					from. Only the team that you are affiliated with, all teams, or specific teams.
				</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/source-tournaments.png"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>
					You will then be taken to a page where you will select what tournaments you want your data
					to come from.
				</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/tournament-onboarding.png"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>
					Then, you will input the tournament that you are at or if you are not at any tournament.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="info">
	<div class="general-content">
		<div class="side-row">
			<div class="left-phone">
				<Phone
					src="/assets/img/settings.png"
					alt="Screenshot of Lovat Dashboard's settings screen"
				/>
			</div>
			<div class="right-phone">
				<h2>Settings</h2>
				<p>
					In settings you will be able to change any of these preferences at any time. You will be
					able to change where the data is coming from and what tournament you are at. You will also
					be able to select what tournaments you want your data to come from. Additionally you can
					reset the app or delete your account at the bottom.
				</p>
			</div>
		</div>
		<div class="side-row">
			<div class="left-phone">
				<Phone
					src="/assets/img/match-schedule.png"
					alt="Screenshot of Lovat Dashboard's match schedule screen"
				/>
			</div>
			<div class="right-phone">
				<h2>Match Schedule</h2>
				<p>
					If you have a tournament selected, the app will open to the match schedule page. You can
					see all of the matches, or filter them by if a match is scouted or contains a specific
					team. Additionally, if you’re on a team you can see who’s scouted and who’s scheduled to
					scout each match below the team number.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="team-lookup-content">
	<div class="team-lookup-1">
		<h2>Team Lookup</h2>
		<div class="phone-row">
			<div class="phone-column">
				<Phone
					src="/assets/img/team-lookup-1.PNG"
					alt="Screenshot displaying the team code portion of Lovat Collection's onboarding flow"
				/>
				<p>
					There are three components to the team lookup page. Category metrics, breakdowns, and
					notes. On the category metrics tab you can see plenty of averages and statistics like
					driver ability, total score, and amp scores.
				</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/team-lookup-2.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>
					You can tap on a category and swipe between the tabs for more details about each metric.
					Most tabs will have a sparkline and comparison to the average for all teams.
				</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/team-lookup-3.png"
					alt="Screenshot displaying the scouter name portion of Lovat Dashboard's team lookup page"
				/>
				<p>
					Auto paths have a list of the points they have scored each time it has been run, and you
					can tap play to view it as an animation.
				</p>
			</div>
		</div>
	</div>
	<div class="team-lookup-2">
		<div class="phone-row">
			<div class="phone-column">
				<Phone
					src="/assets/img/team-lookup-4.png"
					alt="Screenshot displaying the team code portion of Lovat Dashboard's team lookup page"
				/>
				<p>
					Breakdowns show you the percent of matches for which the team has performed each action,
					out of all the recorded matches in your data set.
				</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/team-lookup-5.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Dashboard's team lookup page"
				/>
				<p>Notes shows you all of the notes that scouters have submitted about the team.</p>
			</div>
		</div>
	</div>
</section>

<section class="feature-content">
	<div class="features">
		<div class="side-row">
			<div class="left-phone">
				<Phone
					src="/assets/img/match-predictor.png"
					alt="Screenshot of Lovat Dashboard's match predictor screen"
				/>
			</div>
			<div class="right-phone">
				<h2>Match Predictor</h2>
				<p>
					Each match in the match schedule page has a brain icon in the top right corner of the match.
					Tapping this will take you to the match predictor page. Here, you can see the predicted
					chance of each alliance winning, total score of each alliance, speaker scores, and amp
					scores as well as the dominant role of each robot.
				</p>
			</div>
		</div>

		<div class="side-row">
			<div class="left-phone">
				<Phone
					src="/assets/img/my-alliance.png"
					alt="Screenshot of Lovat Dashboard's match predictor screen"
				/>
			</div>
			<div class="right-phone">
				<h2>Alliance Page</h2>
				<p>
					On the match schedule page, you can also tap the blue or red alliance colors on a match to
					open the alliance page. Here you can find most of the things you could on the match
					predictor page, as well as an auto path visualizer where you can mix and match auto paths
					from all 3 teams, and play an animation of them all together.
				</p>
			</div>
		</div>

		<div class="side-row">
			<div class="left-phone">
				<Phone
					src="/assets/img/navigation-drawer.jpg"
					alt="Screenshot of Lovat Dashboard's match predictor screen"
				/>
			</div>
			<div class="right-phone">
				<h2>Navigation Drawer</h2>
				<p>
					If you open the drawer by tapping the menu icon or swiping from the left edge, you will have
					an easy way to get to any of these pages.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="picklist-content">
	<div class="picklist">
		<h2>Picklists</h2>
		<div class="phone-row">
			<div class="phone-column">
				<Phone
					src="/assets/img/picklist-1.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>
					In the navigation drawer you will be able to find the picklist page. Here you can see the
					picklists that you have already made on your device.
				</p>
			</div>

			<div class="phone-column-2">
				<Phone
					src="/assets/img/data-onboarding.png"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>
					You can tap the plus to make a new picklist. Slide each of the sliders to your desired
					weight for that metric. For example, if you want a team with many amp scores you would
					move that slider farther right, and if you care less about driver ability you would move
					that slider farther left.
				</p>
			</div>

			<div class="phone-column-2">
				<Phone
					src="/assets/img/source-tournaments.png"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>You can tap to share your picklist with everyone on your team.</p>
			</div>

			<div class="phone-column-2">
				<Phone
					src="/assets/img/tournament-onboarding.png"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>You can view all of your team’s shared picklists on the shared tab.</p>
			</div>
		</div>
	</div>
</section>

<section class="scanner-content">
	<div class="scanner">
		<div class="side-row">
			<div class="left-phone">
				<Phone
					src="/assets/img/scanner-dashboard.jpg"
					alt="Screenshot of Lovat Dashboard's match predictor screen"
				/>
			</div>
			<div class="right-phone">
				<h2>QR Code Scanner</h2>
				<p>
					You can use the QR code scanner to upload a scout report from Lovat Collection from anyone
					on your team in the event that they aren’t able to connect to the internet.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.left-phone {
		flex: 1;
		max-width: 250px;
		margin-bottom: 20px;
	}

	.right-phone {
		flex: 1;
	}

	section {
		padding: 20px;
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
	}
	.onboarding-content h2 {
		margin-bottom: 50px;
	}
	p {
		margin-top: 7px;
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
	.general-content {
		max-width: 1100px;
		margin: 0 auto;
	}
	.info > * {
		max-width: 525px;
		margin: 20px auto;
	}

	.info {
		background-color: var(--secondary-container);
	}
	.side-paragraph {
		max-width: 518px;
		margin-bottom: 50px;
		text-align: left;
	}
	.side-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}

	.phone-column p {
		margin-top: 20px;
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

	.post-match h2 {
		margin-bottom: 7px;
	}

	.post-match p {
		margin: 0;
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

	.team-lookup-1 {
		max-width: 900px;
		margin: 0 auto;
	}

	.team-lookup-2 {
		max-width: 600px;
		margin: 0 auto;
	}
	.feature-content {
		background-color: var(--secondary-container);
	}
	.features {
		max-width: 800px;
		margin: 20px auto;
	}
	.picklist {
		max-width: 1100px;
		margin: 0 auto;
	}
	.scanner-content {
		background-color: var(--secondary-container);
	}

	.scanner {
		max-width: 600px;
		margin: 20px auto;
	}

	.content-wrapper p {
		margin: 0;
		padding: 0;
		font-size: 24px;
	}

	.video {
		background-color: var(--secondary-container);
	}
	.video-content {
		max-width: 550px;
		margin: 0 auto;
	}

	iframe {
		border-radius: 14px;
		aspect-ratio: 560 / 315;
		width: 100%;
	}
	@media only screen and (max-width: 650px) {
		.phone-row {
			flex-direction: column;
			max-width: 251px;
		}

		.header {
			flex-direction: column;
		}

		.side-row {
			flex-direction: column;
		}

		.left-phone {
			flex: none;
			width: 100%;
		}
	}
</style>
