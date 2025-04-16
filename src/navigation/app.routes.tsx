import { IRoute } from './navigation.types'
import { lazy } from 'react'
import { urls } from './app.urls.ts'

const Interviews = lazy(() => import('../screens/Interviews'))
// const Tasks = lazy(() => import('../screens/Tasks'))

const appRoutes: IRoute[] = [
	{
		path: urls.interviews,
		element: <Interviews />
	},
	{
		path: urls.candidates,
		element: <Interviews />
	},
	{
		path: urls.profile,
		element: <Interviews />
	},
	{
		path: urls.tasks,
		element: <Interviews />
	},
	{
		path: urls.settings,
		element: <Interviews />
	}
]

export default appRoutes
