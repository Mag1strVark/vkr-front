import AuthorizationTypes from './components/AuthorizationTypes'
import TextInput from '../../../../shared/Inputs/TextInput'
import AuthContext, { IAuthName, IAuthValue } from '../../auth.context.ts'
import { useContext } from 'react'
import s from '../../auth.module.css'
import EnterButton from '../../../../shared/Buttons/EnterButton'

interface IProps {
	actionType: 'register' | 'login'
	onActive: (type: 'register' | 'login') => void
	serverError: string
	loading: boolean
}

interface IAuthTypeButton {
	title: string
	actionType: 'register' | 'login'
	onActive: () => void
}

const CredentialsForm = (props: IProps) => {
	const context = useContext(AuthContext)

	const AuthTypeButtonList: IAuthTypeButton[] = [
		{
			title: 'Вход',
			actionType: 'login',
			onActive: () => props.onActive('login')
		},
		{
			title: 'Регистрация',
			actionType: 'register',
			onActive: () => props.onActive('register')
		}
	]

	return (
		<div className={s.container}>
			<div className={s.authorizationTypes}>
				{AuthTypeButtonList.map((item, i) => (
					<AuthorizationTypes key={i} {...item} active={item.actionType === props.actionType} />
				))}
			</div>
			<div className={s.form}>
				{props.actionType === 'register' && (
					<TextInput<IAuthName, IAuthValue>
						serverError={props.serverError}
						label='ФИО'
						name='full_name'
						value={context.values.full_name}
						onChange={context.onChange}
						placeholder='Введите'
						type='text'
						autoComplete='off'
					/>
				)}
				<TextInput<IAuthName, IAuthValue>
					serverError={props.serverError}
					label='Электронная почта'
					name='email'
					value={context.values.email}
					onChange={context.onChange}
					placeholder='Введите'
					type='text'
					autoComplete='off'
				/>
				<div className={s.formPasswordInput}>
					<TextInput<IAuthName, IAuthValue>
						style={{ width: '100%' }}
						serverError={props.serverError}
						label='Пароль'
						name='password'
						value={context.values.password}
						onChange={context.onChange}
						placeholder='Введите'
						type='text'
						autoComplete='off'
					/>
					<EnterButton loading={props.loading} />
				</div>
				{props.actionType === 'login' && (
					<span className='text-400 link_text-color'>Забыли пароль?</span>
				)}
			</div>
		</div>
	)
}

export default CredentialsForm
