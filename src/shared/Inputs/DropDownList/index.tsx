import s from './dropDownList.module.css'
import Button from '../../Buttons/Button'
import CloseWhite from '../../../assets/icons/CloseWhite.svg?react'
import { ReactNode, RefObject, useEffect, useRef } from 'react'

export interface IItem {
	id: string
	title: string
	icon?: ReactNode
}

interface IProps<T extends IItem> {
	needToBeMarked?: boolean
	currentMark?: string
	title?: string
	listItems: T[]
	onItemClick: (item: T) => void
	onClose: () => void
	buttonRef: RefObject<HTMLButtonElement | null>
	position: 'left' | 'right' | 'center'
}

const DropDownList = <T extends IItem>({ needToBeMarked = false, ...props }: IProps<T>) => {
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (props.buttonRef.current && dropdownRef.current) {
			const buttonRect = props.buttonRef.current.getBoundingClientRect()
			dropdownRef.current.style.position = 'absolute'
			dropdownRef.current.style.top = `4px` // Позиционируем под кнопкой
			if (props.position !== 'center') {
				dropdownRef.current.style[props.position] = `${buttonRect[props.position]}px` // Позиционируем по левому краю кнопки
			}
		}
	}, [props.buttonRef])

	return (
		<div className={s.container} ref={dropdownRef}>
			<div className={s.closeButton}>
				<Button style={{ background: '#CDCDCDCC' }} onClick={props.onClose}>
					<CloseWhite />
				</Button>
			</div>
			{props.title && <span className={s.label}>{props.title}</span>}
			<div className={s.list}>
				{props.listItems.map((item, index) => (
					<div key={index} className={s.listItem} onClick={() => props.onItemClick(item)}>
						{needToBeMarked && props.currentMark === item.id && <span className={s.marker}>•</span>}
						{item.icon && <span className={s.icon}>{item.icon}</span>}
						<span className={s.text}>{item.title}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default DropDownList
