<script lang="ts">
	import Phone from '$lib/components/Phone.svelte';
	import { Icon } from 'magnolia-ui-svelte';
</script>

<svelte:head>
	<title>Scouting Lead | Lovat</title>
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
		<p>For scouting leads</p>
	</div>
</section>

<section class="video">
	<div class="video-content">
		<iframe src="https://www.youtube.com/embed/F4bkGeY4V44?si=Vi2-lVquE4HN37Pd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	</div>
</section>

<section class="onboarding">
	<div class="onboarding-content">
		<h2>Onboarding</h2>
        <p>This process is done once by one person on your team. Whoever does the team onboarding will automatically have the scouting lead role, but they will have the ability to upgrade other users that have joined using the team code to the “scouting lead” role. </p>
		<div class="phone-row">
			<div class="phone-column">
				<Phone
					src="/assets/img/dash-onboarding-1.png"
					alt="Screenshot displaying the team code portion of Lovat Collection's onboarding flow"
				/>
				<p>
					Go to your app store and search “Lovat Dashboard". Once downloaded you will be greeted with this screen. You will then be prompted to make an account. Using this account, you can sign in on different devices and have your settings saved.
				</p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/lead-onboarding-2.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>Next you will need to enter your team number. If you are the first person on your team to use Lovat Dashboard you can go ahead and start the team onboarding person, assuming you are a team captain, scouting lead or mentor. </p>
			</div>

			<div class="phone-column">
				<Phone
					src="/assets/img/lead-onboarding-3.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>Enter your team email, if for some reason you don’t have one enter your personal email. You will then receive a verification email, if you don’t see one after a couple of minutes you can tap this button to resend it. Click the link in the email to verify.</p>
			</div>

            <div class="phone-column">
				<Phone
					src="/assets/img/lead-onboarding-4.PNG"
					alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
				/>
				<p>Now you have successfully finished onboarding your team! The next couple of screens ask you to select where your data is coming from. This will only affect the numbers you see, and have no impact on others on your team.</p>
			</div>
            </div>
</section>

<section class="settings-content">
	<div class="settings">
        <h2>Settings</h2>
        <div class="phone-row">
            <div class="phone-column">
                <Phone
                    src="/assets/img/lead-settings-1.PNG"
                    alt="Screenshot displaying the team code portion of Lovat Dashboard's team lookup page"
                />
                <p>In addition to the normal settings, which you can learn more about in our Lovat Dashboard walk through, there are two scouting lead specific settings. The first being the team code, both scouters and Lovat Dashboard users will need this to join your team. To reveal the code tap the button in the upper right corner.</p>
		    </div>
    
            <div class="phone-column">
                <Phone                        
					src="/assets/img/lead-settings-2.PNG"
                    alt="Screenshot displaying the scouter name portion of Lovat Dashboard's team lookup page"
                />
                <p>Secondly, to upgrade users on your team from analyst to scouting leads go to the bottom of the settings page and select people from the list of analysts on your team. At this point in time we have no way of demoting people from scouting lead so ensure that you truly want to upgrade the people you are choosing before you do so.</p>
            </div>
        </div>
</section>

		<section class="picklist-content">
            <div class="picklist">
                <h2>Scouter Shift</h2>
                <p>The next feature is scouter schedules, we highly recommend that you make scouter schedules because it simplifies the process of scouting a match for your scouters and completely reduces the chance of them entering incorrect match information.</p>
                <div class="phone-row">
                    <div class="phone-column">
                        <Phone
                            src="/assets/img/scouter-1.PNG"
                            alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
                        />
                        <p>To create a scouter schedule first make sure that you have the correct tournament selected in settings. Create a new by shift tapping the purple plus, choose the starting and ending matches of the shift, which are inclusive, then assign scouters that have affiliated themselves with your team to the teams in the match. Team 1 is the first team in the red alliance, team 2 is the second and so on. You may assign more than one or no scouters to a given team. </p>
                    </div>
        
                    <div class="phone-column-2">
                        <Phone
                            src="/assets/img/scouter-2.PNG"
                            alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
                        />
                        <p>You can edit scouter shifts at any point, however, if you are at a venue with spotty reception scouters may not be able to load in the new schedule immediately so just keep that in mind.</p>
                    </div>
        
                    <div class="phone-column-2">
                        <Phone
                            src="/assets/img/scouter-3.PNG"
                            alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
                        />
                        <p>To delete shifts swipe to the left until this happens.</p>
                    </div>
        
                    <div class="phone-column-2">
                        <Phone
                            src="/assets/img/scouter-4.PNG"
                            alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
                        />
                        <p>Edit notes: Scouting leads can also edit notes. Go to the team look up page, search a team number, go to the notes tab and tap the pencil in the upper right corner of the note you want to edit. Simply enter in your new note and you're done!</p>
                    </div>
                </div>
			</section>

        <section class="match-content">
            <div class="match-data-viewer">
                <h2>Match Data Viewer</h2>
                <div class="phone-row">
                    <div class="phone-column">
                        <Phone
                            src="/assets/img/match-data-1.PNG"
                            alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
                        />
                        <p>Long hold on a specific match and team in the match  schedule page. Then pick from the list of scouters on your team that have scouted that match. Once you have selected a scouter you will see the data that that specific scouter has collected for the match you chose. At the top you will see the auto path, robot role, stage, and high note that they recorded as well as the total number of points, defensive events, amp scores, speaker scores, trap scores and pickups.</p>
                    </div>
        
                    <div class="phone-column-2">
                        <Phone
                            src="/assets/img/match-data-2.PNG"
                            alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
                        />
                        <p>To see the data on a more granular level you can flip to the timeline tab. This will show each event with a timestamp. It is important to note that everything on the post match screen, like robot role, stage etc, in Lovat Collection will not show up on the timeline but can be viewed on this screen.</p>
                    </div>
        
                    <div class="phone-column-2">
                        <Phone
                            src="/assets/img/match-data-3.PNG"
                            alt="Screenshot displaying the scouter name portion of Lovat Collection's onboarding flow"
                        />
                        <p>Scouting leads not only can see this page, but can delete the scout report they are viewing by tapping the trash can in the upper righthand corner.</p>
                    </div>
                </div>
			</section>

<style>
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
	.onboarding-content {
		max-width: 1100px;
		margin: 0 auto;
	}

    .content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
    }
	
	.settings {
		max-width: 600px;
		margin: 0 auto;
	}
	
	.settings-content {
		background-color: var(--secondary-container);
	}

	.picklist {
		max-width: 1100px;
		margin: 0 auto;
	}
    
    .match-content {
		background-color: var(--secondary-container);
    }

	.match-data-viewer {
		max-width: 800px;
        margin: 0 auto;
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
	}
</style>