import s from './SwitchableArea.module.css'
import Icon from '../../assets/icons/CloseWhite.svg?react'
import { useState } from 'react'
import ItemActionsPanel from './components/ItemActionsPanel'
import Card, { ICard } from '../Card'

export interface IPageTabs {
	id: string
	title: string
}

interface ICategoryTabs {
	id: null | string
	title: string
}

interface IProps {
	pageTabs: IPageTabs[]
}

const SwitchableArea = (props: IProps) => {
	const [categoryTabsList] = useState<ICategoryTabs[]>([
		{
			id: null,
			title: 'Все'
		}
	])

	const cards: ICard[] = [
		{
			id: '1',
			title: 'Логирование',
			categoryName: 'Frontend-разработка',
			icon: <Icon />
		},
		{
			id: '2',
			title: 'Логирование',
			categoryName: 'Frontend-разработка',
			icon: <Icon />,
			displayDescription: true,
			authorName: 'Власов',
			levelDeveloperName: 'Junior',
			description:
				'На входе имеем список строк разной длины. Необходимо написать функцию all_eq(lst), которая вернет новый список из строк одинаковой длины. Длину итоговой строки определяем исходя из самой большой из них. Если конкретная строка короче самой длинной, дополнить ее нижними подчеркиваниями с правого края до требуемого количества символов.'
		}
	]

	return (
		<div className={s.container}>
			<div className={s.tabs}>
				{props.pageTabs.map((tab, i) => (
					<div key={i} className={s.tab}>
						{tab.title}
					</div>
				))}
			</div>
			<div className={s.content}>
				<div className={s.leftContent}>
					<div className={s.categoryTabs}>
						{categoryTabsList.map((tab, i) => (
							<span key={i}>{tab.title}</span>
						))}
					</div>
				</div>
				<div className={s.rightContent}>
					<ItemActionsPanel />
					{cards.map((card, i) => (
						<Card key={i} {...card} />
					))}
				</div>
			</div>
		</div>
	)
}

export default SwitchableArea
