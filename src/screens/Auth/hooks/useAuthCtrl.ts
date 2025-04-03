import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

import useHttpLoaderWithServerError from '../../../shared/hooks/http/useHttpLoaderWithServerError.ts'
import { generateValueAuthState, IAuthName, IAuthValue, IAuthValues } from '../auth.context.ts'
import useValidationCtrl from '../../../shared/Validation/useValidationCtrl.ts'
import validation from '../../../shared/Validation/validation.ts'
import { UserRoleEnum } from '../../../enums/userRole.enum.ts'
import authAtom from '../auth.atom.ts'
import authApi from '../auth.api.ts'

interface IProps {
	actionType: 'register' | 'login'
}

const useAuthCtrl = (props: IProps) => {
	const [authValue, setAuthValue] = useState<IAuthValues>(generateValueAuthState())
	const setAuthState = useSetRecoilState(authAtom)
	const { wait, loading, serverError } = useHttpLoaderWithServerError()

	useEffect(() => {
		validationCtrl.clearAllError()
		setAuthValue(generateValueAuthState())
	}, [props.actionType])

	const handleChange = (name: IAuthName, value: IAuthValue) => {
		setAuthValue(prev => ({ ...prev, [name]: value }))
		validationCtrl.clearError(name)
	}

	const handleSubmit = () => {
		wait(
			authApi[props.actionType]({
				...authValue,
				role: UserRoleEnum.INTERVIEWER
			}),
			resp => {
				if (resp.status === 'success') {
					setAuthState({ ...resp.body })
				}
			}
		)
	}

	const validations = {
		email: validation.emailValidate,
		password: validation.passwordValidate,
		...(props.actionType === 'register' && {
			full_name: validation.fullNameValidate
		})
	}

	const validationCtrl = useValidationCtrl(handleSubmit, authValue, validations)

	return {
		validationCtrl,
		handleSubmit,
		handleChange,
		serverError,
		authValue,
		loading
	}
}

export default useAuthCtrl
