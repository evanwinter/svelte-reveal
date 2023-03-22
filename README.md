# svelte-reveal

Simple, spring-based reveal animations for Svelte components.

This package has two exports:

1. `<Reveal />`: A Svelte component that reveals itself.
2. `use:reveal`: A Svelte action that reveals the DOM element it's attached to.

## Usage

### Using `<Reveal />`

---

| key       | description                                | default value | values                                |
| --------- | ------------------------------------------ | ------------- | ------------------------------------- |
| direction | the direction the element moves            | `"up"`        | `"up"`, `"down"`, `"left"`, `"right"` |
| delay     | number of milliseconds to delay the reveal | `0`           | `number`                              |
| distance  | number of pixels the element moves         | `32`          | `number`                              |

---

Direction

```svelte
<Reveal direction="up">
	<p>Anim et laborum sit incididunt sit nostrud.</p>
</Reveal>
<Reveal direction="down">
	<p>Anim et laborum sit incididunt sit nostrud.</p>
</Reveal>
<Reveal direction="left">
	<p>Anim et laborum sit incididunt sit nostrud.</p>
</Reveal>
<Reveal direction="right">
	<p>Anim et laborum sit incididunt sit nostrud.</p>
</Reveal>
```

---

Delay

```svelte
<Reveal delay={300}>
	<p>Anim et laborum sit incididunt sit nostrud.</p>
</Reveal>
```

Use `delay` to stagger multiple items.

```svelte
{#each things as thing, i}
	<Reveal delay={i * 50}>
		<p>{thing.text}</p>
	</Reveal>
{/each}
```

---

Distance

```svelte
<Reveal distance={100}>
	<p>Anim et laborum sit incididunt sit nostrud.</p>
</Reveal>
```

### Using `use:reveal`

```
<div use:reveal />

<div use:reveal={{
  x: 48,
  stiffness: 0.05,
  damping: 0.6,
  delay: 300
}}>
```
