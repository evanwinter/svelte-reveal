<script lang="ts">
	import { inview } from 'svelte-inview';
	import { spring } from 'svelte/motion';
	export let direction: 'up' | 'down' | 'left' | 'right' = 'up';
	export let distance: number = 32;
	export let delay: number = 0;
	export let stiffness: number = 0.05;
	export let damping: number = 0.5;

	const options = {
		right: { x: -1 * distance, y: 0 },
		left: { x: distance, y: 0 },
		up: { x: 0, y: distance },
		down: { x: 0, y: -1 * distance }
	}[direction];

	const progress = spring(0, { stiffness, damping });
</script>

<div
	use:inview
	on:inview_change={(event) => {
		const { inView } = event.detail;
		if (inView) {
			setTimeout(() => {
				progress.set(1);
			}, delay);
		}
	}}
	style="opacity: {String($progress)}; transform: translate(
		{options.x * (1 - $progress)}px,
		{options.y * (1 - $progress)}px
	);"
>
	<slot />
</div>
