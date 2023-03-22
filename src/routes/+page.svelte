<script>
	import { Reveal } from '$lib';

	const items = Array.from({ length: 1_000 }, (_, i) => i);
</script>

<nav style="display:flex;justify-content:flex-end;gap:1rem;">
	<Reveal direction="right" delay={200}>
		<a href="#">Home</a>
	</Reveal>
	<Reveal direction="right" delay={150}>
		<a href="#">About</a>
	</Reveal>
	<Reveal direction="right" delay={100}>
		<a href="#">Contact</a>
	</Reveal>
</nav>

<section>
	{#each items as item}
		<Reveal direction="up" distance={100} delay={(item * 50) % 3}>
			<div class="item" />
		</Reveal>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-gap: max(5vw, 2rem);
		grid-template-columns: repeat(3, 1fr);
		padding-inline: max(5vw, 2rem);
	}

	section .item {
		background: red;
		height: min(300px, 10vw);
	}
</style>
