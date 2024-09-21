<script>
  import AboutBox from "../../components/about/AboutBox.svelte";
</script>

<svelte:head>
	<title>Heonningg's Blog | More</title>
	<meta name="description" content="More about me" />
</svelte:head>

<main>
	<AboutBox />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		margin: 40px 20px;
		gap: 40px;
	}
</style>