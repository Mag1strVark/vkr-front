import Button from '../../../../shared/Buttons/Button'
import PlusWhite from '../../../../assets/icons/Plus.svg?react'
import Direction from '../../../../assets/icons/direction.svg?react'
import FinalTest from '../../../../assets/icons/finalTest.svg?react'
import QuestionСategory from '../../../../assets/icons/questionСategory.svg?react'
import PracticalTask from '../../../../assets/icons/practicalTask.svg?react'
import TextInput from '../../../../shared/Inputs/TextInput'
import s from '../../tasks.module.css'
import usePageHeaderCtrl, {
	ISearchInputName,
	ISearchInputValue
} from './hooks/usePageHeaderCtrl.ts'
import { useRef, useState } from 'react'
import DropDownList, { IItem } from '../../../../shared/Inputs/DropDownList'
import DropDown from '../../../../shared/Inputs/DropDown'

const PageHeader = () => {
	const [open, setOpen] = useState(false)
	const buttonRef = useRef<HTMLButtonElement | null>(null)
	const ctrl = usePageHeaderCtrl()

	const items: IItem[] = [
		{ id: '1', title: 'Направление', icon: <Direction /> },
		{ id: '2', title: 'Итоговый тест', icon: <FinalTest /> },
		{ id: '3', title: 'Категория вопросов', icon: <QuestionСategory /> },
		{ id: '4', title: 'Практическое задание', icon: <PracticalTask /> }
	]

	const itemsFilter: IItem[] = [
		{ id: '0', title: 'Все' },
		{ id: '1', title: 'Junior' },
		{ id: '2', title: 'Middle' },
		{ id: '3', title: 'Senior' }
	]

	const onItemClick = (item: IItem) => {
		console.log(item)
		setOpen(false)
	}

	return (
		<div className={s.pageHeaderContainer}>
			<div className={s.createButton}>
				<h1>Задачи</h1>
				<Button
					ref={buttonRef}
					onClick={() => setOpen(true)}
					style={{ background: '#71D186', boxShadow: 'none' }}
				>
					<PlusWhite />
				</Button>
				{open && (
					<DropDownList
						position='left'
						title='Создать'
						listItems={items}
						onItemClick={onItemClick}
						onClose={() => setOpen(false)}
						buttonRef={buttonRef}
					/>
				)}
			</div>
			<div className={s.filterPanel}>
				<TextInput<ISearchInputName, ISearchInputValue>
					className={s.searchInput}
					value={ctrl.pageHeaderValue.searchText}
					placeholder='Найти'
					name='searchText'
					onChange={ctrl.handleChange}
				/>
				<DropDown listItems={itemsFilter} />
			</div>
		</div>
	)
}

export default PageHeader
