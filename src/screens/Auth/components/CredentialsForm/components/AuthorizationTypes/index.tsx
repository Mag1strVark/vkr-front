import s from '../../../../auth.module.css'
import cn from '../../../../../../utils/cn.ts'

interface IProps {
	title: string
	active: boolean
	onActive: () => void
}

const AuthorizationTypes = (props: IProps) => {
	return (
		<div
			onClick={props.onActive}
			className={cn(s.authorizationTypesButton, 'text-500')}
			data-active={props.active}
		>
			{props.title}
		</div>
	)
}

export default AuthorizationTypes
