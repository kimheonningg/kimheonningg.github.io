<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Shimmer from 'svelte-material-icons/Shimmer.svelte'

	const goHome = () => {
		goto('/');
	}
</script>

<header>
	<h2 on:click={goHome}> 히오니의 블로그 <Shimmer color = "#F7E54D" width = "25px" height = "25px"/> </h2>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Main</a>
			</li>
			<li aria-current={$page.url.pathname === '/more' ? 'page' : undefined}>
				<a href="/more">More</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
	}

	h2{
		font-weight: 800;
        font-size: 20px;
		display: flex;
		justify-content: center;
		padding-top: 5px;
		text-shadow: rgba(0, 0, 0, 0.5);
		cursor: default;
	}

	nav {
		display: flex;
		justify-content: center;
		width: 100%;
		--background: rgba(255, 255, 255, 0.7);
		box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		width: 100%;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		transform: translateX(-50%);
		border: var(--size) solid transparent;
		border-top: var(--size) solid pink;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		border-radius: 4px;
	}

	a:hover {
		color: pink;
	}
</style>
