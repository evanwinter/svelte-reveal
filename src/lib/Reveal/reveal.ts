import type { Action } from 'svelte/action';
import { spring } from 'svelte/motion';

export const reveal: Action = (
	node: HTMLElement,
	params?: {
		x?: number;
		y?: number;
		stiffness?: number;
		damping?: number;
		delay?: number;
	}
) => {
	const { x, y, stiffness, damping, delay } = {
		x: 0,
		y: 0,
		stiffness: 0.05,
		damping: 0.5,
		delay: 0,
		...params
	};

	const progress = spring(0, { stiffness, damping });
	const start = setTimeout(() => progress.set(1), delay);

	const unsubscribe = progress.subscribe((value) => {
		node.style.opacity = String(value);
		node.style.transform = `translate(
      ${x * (1 - value)}px,
      ${y * (1 - value)}px
    )`;
	});

	return {
		destroy() {
			clearTimeout(start);
			unsubscribe();
		}
	};
};
