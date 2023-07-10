<script>
	import { Reveal } from '$lib';

	const items = Array.from({ length: 1_000 }, (_, i) => i);
</script>

<section>
	{#each items as item}
		<Reveal eager={true} direction="up" distance={100} delay={(item * 50) % 3}>
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
