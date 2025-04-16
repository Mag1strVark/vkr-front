import { createBrowserRouter } from 'react-router-dom'
import { RouteObject } from 'react-router'

import appRoutes from './app.routes.tsx'
import Layout from '../shared/Layout'

const routes: RouteObject[] = appRoutes.map(r => ({ path: r.path, element: r.element }))

const appRouter = createBrowserRouter([
	{
		element: <Layout />,
		children: routes
	}
])
export default appRouter
