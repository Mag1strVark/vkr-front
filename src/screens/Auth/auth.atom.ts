import { atom } from 'recoil'

import { IRegisterDTO } from './auth.types.ts'

export interface IAuthState {
  accessToken: string
  user: IRegisterDTO | null
}

const initialState: IAuthState = {
  accessToken: '',
  user: null,
}

const authAtom = atom<IAuthState>({
  key: 'auth',
  default: initialState,
})

export default authAtom
