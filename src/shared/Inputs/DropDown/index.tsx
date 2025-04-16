import { useRef, useState } from 'react'
import DropDownList, { IItem } from '../DropDownList'
import s from './dropDown.module.css'

interface IProps {
	listItems: IItem[]
}

const DropDown = (props: IProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [selectedItem, setSelectedItem] = useState<IItem>(props.listItems[0])
	const buttonRef = useRef<HTMLButtonElement | null>(null)

	const onItemClick = (item: IItem) => {
		setSelectedItem(item)
		setIsOpen(false)
	}

	return (
		<>
			<span className={s.button} ref={buttonRef} onClick={() => setIsOpen(true)}>
				{selectedItem.title}
			</span>
			{isOpen && (
				<DropDownList
					position='center'
					needToBeMarked={true}
					listItems={props.listItems}
					currentMark={selectedItem?.id}
					buttonRef={buttonRef}
					onClose={() => setIsOpen(false)}
					onItemClick={onItemClick}
				/>
			)}
		</>
	)
}

export default DropDown
