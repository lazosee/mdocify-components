import type { IconType } from './icons'

export type CalloutProps = {
	title: string
	type: 'tip' | 'warning' | 'danger' | 'success'
}

export type IconProps = {
	name: IconType
	slot?: string
}
