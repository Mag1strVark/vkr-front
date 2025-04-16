import { useEffect, useRef, useState } from 'react'
import DropDownList, { IItem } from '../../../Inputs/DropDownList'
import MiniClose from '../../../../assets/icons/miniClose.svg?react'
import s from '../../stackPanel.module.css'

interface IProps {
	items: IItem[]
}

const DirectionSelector = (props: IProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [selectedItem, setSelectedItem] = useState<IItem>(
		[
			{
				id: '',
				title: 'Не указано'
			}
		][0]
	)
	const buttonRef = useRef<HTMLButtonElement | null>(null)

	useEffect(() => {
		const newItems: IItem[] = [
			{
				id: '',
				title: 'Не указано'
			},
			...props.items
		]
		setSelectedItem(newItems[0])
	}, [props.items])

	const onItemClick = (item: IItem) => {
		setSelectedItem(item)
		setIsOpen(false)
	}

	const SelectedCategory = () => {
		return selectedItem.id === '' ? (
			<span className={s.button} onClick={() => setIsOpen(true)}>
				{selectedItem.title}
			</span>
		) : (
			<span className={s.buttonSelected}>
				{selectedItem.title}{' '}
				<MiniClose onClick={() => setSelectedItem({ id: '', title: 'Не указан' })} />
			</span>
		)
	}

	return (
		<div>
			<span>Направление: </span>
			<SelectedCategory />
			{isOpen && (
				<DropDownList
					position='left'
					needToBeMarked={true}
					listItems={props.items}
					currentMark={selectedItem?.id}
					buttonRef={buttonRef}
					onClose={() => setIsOpen(false)}
					onItemClick={onItemClick}
				/>
			)}
		</div>
	)
}

export default DirectionSelector
