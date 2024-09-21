<script>
	import myphoto_pink from '$lib/images/myphoto/myphoto_pink.jpg';
	import ContactBox from '../components/contact/ContactBox.svelte';
  	import EducationBox from '../components/education/EducationBox.svelte';
  	import ExperienceBox from '../components/experience/ExperienceBox.svelte';
	import OrganizationBox from '../components/organization/OrganizationBox.svelte';
  	import LanguageBox from '../components/language/LanguageBox.svelte';
	import VolunteerBox from '../components/volunteer/VolunteerBox.svelte';
</script>

<svelte:head>
	<title>Heonningg's Blog</title>
	<meta name="description" content="heonningg's personal blog" />
</svelte:head>

<main>
	<div class ="left">
		<img src = {myphoto_pink} alt = "Photo Of Me"/>
	</div>
	<div class = "right">
		<ContactBox />
		<EducationBox />
		<ExperienceBox />
		<OrganizationBox />
		<LanguageBox />
		<VolunteerBox />
	</div>
</main>

<style>
	main {
		display: flex;
	}
	
	.left, .right {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start; 
		justify-content: flex-start;
		padding: 30px;
	}
	
	.left {
		box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);
	}

	.right {
		border-left: 4px dashed #be7f8a;
		max-width: 100%;
		overflow-y: visible;
		box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2);
	}

	img {
		max-width: 100%; 
		height: auto;
		object-fit: contain;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
		border-radius: 15px;
	}

	@media (max-width: 768px) {
		main {
			flex-direction: column;
			align-items: center;
		}

		.left, .right {
			width: 100%;
			box-shadow: none;
			border: none;
			padding: 10px;
		}

		.right {
			border-top: 4px dashed #be7f8a;
			box-shadow: none;
			padding-top: 30px;
		}

		img {
			margin-bottom: 20px;
		}
	}
</style>