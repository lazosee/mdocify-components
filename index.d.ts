declare module '*.astro' {
	import type { ComponentType } from 'astro'
	const Component: ComponentType<Record<string, unknown>>
	export { ComponentType }
	export default Component
}
