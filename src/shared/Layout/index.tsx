import { Outlet } from 'react-router'

import s from './layout.module.css'
import SabyAccordeon from '../../assets/icons/sabyAccordeon.svg?react'
import SabyTitle from '../../assets/icons/sabyTitle.svg?react'
import Navbar from './components/Navbar'
import { Suspense } from 'react'
import ThreeDotsLoader from '../Loaders/ThreeDotsLoader'

const Layout = () => {
	return (
		<div className={s.container}>
			<div className={s.sidebar}>
				<div className={s.logoBlock}>
					<SabyAccordeon />
					<SabyTitle />
				</div>
				<Navbar />
			</div>
			<div className={s.pageContent}>
				<Suspense fallback={<ThreeDotsLoader />}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	)
}

export default Layout
