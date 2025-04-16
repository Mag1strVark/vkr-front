import s from './stackPanel.module.css'
import { IItem } from '../Inputs/DropDownList'
import DirectionSelector from './components/DirectionSelector'
import SaveButton from './components/SaveButton'
import CloseButton from './components/CloseButton'
import DeleteIcon from '../../assets/icons/DeleteIcon.svg?react'
import { PropsWithChildren } from 'react'

const items: IItem[] = [
	{
		id: '1',
		title: 'Frontend'
	}
]

const StackPanel = (props: PropsWithChildren) => {
	return (
		<div className={s.container}>
			<div className={s.mainContent}>
				<div className={s.header}>
					<DirectionSelector items={items} />
					<SaveButton />
				</div>
				{props.children}
			</div>
			<div className={s.sideContent}>
				<CloseButton />
				<DeleteIcon />
			</div>
		</div>
	)
}

export default StackPanel
