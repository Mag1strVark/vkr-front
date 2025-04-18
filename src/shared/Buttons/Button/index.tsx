import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, PropsWithChildren, Ref } from 'react'

import s from './Button.module.css'
import cn from '../../../utils/cn.ts'

export interface IButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	size?: 'm' | 'xl' | '5xl'
	loading?: boolean
}

const Button = (
	{ size = 'm', ...props }: PropsWithChildren<IButtonProps>,
	ref: Ref<HTMLButtonElement> | undefined
) => {
	return (
		<button
			{...props}
			ref={ref}
			type={props.type || 'button'}
			className={cn(s.button, ...(props.className || ''), 'text-400')}
			data-size={size}
			data-loading={props.loading}
		>
			<div>{props.children}</div>
		</button>
	)
}

export default forwardRef(Button)
