import s from './auth.module.css'
import useAuthCtrl from './hooks/useAuthCtrl.ts'
import { useCallback, useState } from 'react'
import CredentialsForm from './components/CredentialsForm'
import AuthContext, { IAuthContext } from './auth.context.ts'
import ValidationForm from '../../shared/Validation'

const Auth = () => {
	const [activeTypeForm, setActiveTypeForm] = useState<'login' | 'register'>('login')
	const authCtrl = useAuthCtrl({ actionType: activeTypeForm })

	const changeType = useCallback((type: 'login' | 'register') => {
		setActiveTypeForm(type)
	}, [])

	const renderContent = () => {
		return (
			<CredentialsForm
				actionType={activeTypeForm}
				onActive={changeType}
				serverError={authCtrl.serverError}
				loading={authCtrl.loading}
			/>
		)
	}

	const values: IAuthContext = {
		values: authCtrl.authValue,
		onChange: authCtrl.handleChange
	}

	return (
		<AuthContext.Provider value={values}>
			<div className={s.wrapper}>
				<ValidationForm
					errors={authCtrl.validationCtrl.errors}
					onSubmit={authCtrl.validationCtrl.handleSubmit}
				>
					<div>{renderContent()}</div>
				</ValidationForm>
			</div>
		</AuthContext.Provider>
	)
}

export default Auth
