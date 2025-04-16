import s from '../../layout.module.css'
import appLinks from '../../../../navigation/app.links.tsx'
import NavigationLink from '../NavigationLink'

const Navbar = () => {
	return (
		<div className={s.navbar}>
			{appLinks.map((link, i) => (
				<NavigationLink link={link} key={i} />
			))}
		</div>
	)
}

export default Navbar
