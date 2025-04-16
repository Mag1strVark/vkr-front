import './styles'
import AuthProvider from './screens/Auth/components/AuthProvider'
import appRouter from './navigation/app.router.tsx'
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { urls } from './navigation/app.urls.ts'

const App = () => {
	useEffect(() => {
		if (location.pathname === '/') {
			location.replace(urls.tasks)
		}
	}, [])

	return (
		<AuthProvider>
			<RouterProvider router={appRouter} />
		</AuthProvider>
	)
}

export default App
