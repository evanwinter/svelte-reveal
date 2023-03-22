<script lang="ts">
	import { reveal } from './reveal';
	export let direction: 'up' | 'down' | 'left' | 'right' = 'up';
	export let distance: number = 32;
	export let delay: number = 0;

	const options = {
		right: { x: -1 * distance },
		left: { x: distance },
		up: { y: distance },
		down: { y: -1 * distance }
	};
</script>

<div use:reveal={{ delay, ...options[direction] }}>
	<slot />
</div>

<style>
	div {
		opacity: 0;
	}
</style>
