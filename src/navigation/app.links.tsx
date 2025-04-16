import { ILink } from './navigation.types.ts'
import { urls } from './app.urls.ts'
import Interviews from '../assets/icons/interviews.svg?react'
import Candidates from '../assets/icons/candidates.svg?react'
import Settings from '../assets/icons/settings.svg?react'
import Profile from '../assets/icons/profile.svg?react'
import Tasks from '../assets/icons/tasks.svg?react'

const appLinks: ILink[] = [
	{
		name: 'Собеседования',
		path: urls.interviews,
		icon: <Interviews />
	},
	{
		name: 'Кандидаты',
		path: urls.candidates,
		icon: <Candidates />
	},
	{
		name: 'Задачи',
		path: urls.tasks,
		icon: <Tasks />
	},
	{
		name: 'Профиль',
		path: urls.profile,
		icon: <Profile />
	},
	{
		name: 'Настройки',
		path: urls.settings,
		icon: <Settings />
	}
]

export default appLinks
