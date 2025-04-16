import { matchRoutes, NavLink, useLocation } from 'react-router-dom'

import appRoutes from '../../../../navigation/app.routes.tsx'
import { ILink } from '../../../../navigation/navigation.types.ts'
import s from '../../layout.module.css'
import cn from '../../../../utils/cn.ts'

interface IProps {
	link: ILink
}

const NavigationLink = (props: IProps) => {
	const currentLocation = useLocation()
	const currentRoutesMatch = matchRoutes(appRoutes, currentLocation)
	let currentPath
	if (currentRoutesMatch) {
		currentPath = currentRoutesMatch[currentRoutesMatch.length - 1]?.route?.path
	}

	const isActive = currentPath?.includes(props.link.path)

	const linkClassName = cn({
		[s.navLink]: true,
		[s.active]: isActive
	})

	return (
		<NavLink className={linkClassName} to={props.link.path}>
			{props.link?.icon} {props.link.name}
		</NavLink>
	)
}

export default NavigationLink
