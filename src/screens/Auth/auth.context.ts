import { createContext } from 'react'

import { IRegisterDTO } from './auth.types.ts'

export interface IAuthValues extends Omit<IRegisterDTO, 'role'> {}
export type IAuthName = keyof IAuthValues
export type IAuthValue = IAuthValues[IAuthName]

export interface IAuthContext {
	values: IAuthValues
	onChange: (name: IAuthName, value: IAuthValue) => void
}

export const generateValueAuthState = (): IAuthValues => ({
	password: '',
	full_name: '',
	email: ''
})

const authContext = createContext<IAuthContext>({
	values: generateValueAuthState(),
	onChange: () => {}
})

export default authContext
