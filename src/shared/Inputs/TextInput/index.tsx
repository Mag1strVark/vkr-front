import { ChangeEvent, CSSProperties, PropsWithChildren, useContext, useEffect, useRef } from 'react'

import ValidationContext from '../../Validation/ValidationContext.ts'
import s from './TextInput.module.css'
import cn from '../../../utils/cn.ts'

export interface IInputProps<T extends string, U extends any> {
	style?: CSSProperties
	inputStyle?: CSSProperties
	value: string
	name: T
	onChange: (name: T, val: U) => void
	disabled?: boolean
	type?: string
	className?: string
	placeholder?: string
	maxLength?: number
	minLength?: number
	label?: string
	autoComplete?: 'off' | 'on'
	serverError?: string
	autofocus?: boolean
	onFocus?: () => void
	onBlur?: () => void
	error?: boolean
	errorText?: string
}

const TextInput = <T extends string, U extends any>(
	props: PropsWithChildren<IInputProps<T, U>>
) => {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const context = useContext(ValidationContext)
	const error = context.errors[props.name]?.message || props.error
	const isError = Boolean(error || props.serverError)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChange(props.name, e.target.value as U)
	}

	useEffect(() => {
		if (props.autofocus && inputRef.current) {
			inputRef.current.focus({ preventScroll: true })
		}
	}, [])

	return (
		<div className={s.inputWrapper} style={props.style}>
			{props.label && <span className={s.textBody}>{props.label}</span>}
			{props.children}
			<input
				ref={inputRef}
				data-error={isError}
				type={props.type || 'text'}
				className={cn(s.textInput, props.className || '')}
				onChange={handleChange}
				autoComplete={props.autoComplete || 'off'}
				style={props.inputStyle}
				onBlur={props.onBlur}
				onFocus={props.onFocus}
				disabled={props.disabled}
				value={props.value}
				maxLength={props.maxLength}
				minLength={props.minLength}
				placeholder={props.placeholder}
			/>
			{isError && <span className={cn('danger_text-color', 'text-400')}>{error}</span>}
		</div>
	)
}

export default TextInput
