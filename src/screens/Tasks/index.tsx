import PageHeader from './components/PageHeader'
import s from './tasks.module.css'
import SwitchableArea, { IPageTabs } from '../../shared/SwitchableArea'
import StackPanel from '../../shared/StackPanel'

const pageTabs: IPageTabs[] = [
	{
		title: 'Итоговый тест',
		id: '1'
	},
	{
		title: 'Категория вопросов',
		id: '2'
	},
	{
		title: 'Практические задания',
		id: '3'
	}
]

const Tasks = () => {
	return (
		<div className={s.container}>
			<PageHeader />
			<SwitchableArea pageTabs={pageTabs} />
			<StackPanel />
		</div>
	)
}

export default Tasks
