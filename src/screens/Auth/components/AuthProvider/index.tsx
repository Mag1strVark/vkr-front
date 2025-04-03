import { PropsWithChildren, useEffect, useRef } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import useHttpLoader from '../../../../shared/hooks/http/useHttpLoader.ts'
import { applyInterceptors } from '../../../../services/http'
import authAtom from '../../auth.atom.ts'
import authApi from '../../auth.api.ts'
import Auth from '../../index.tsx'

const AuthProvider = (props: PropsWithChildren) => {
	const { wait, loading } = useHttpLoader()
	const [authState, setAuthState] = useRecoilState(authAtom)
	const resetAuthState = useResetRecoilState(authAtom)
	const hasRefreshed = useRef(false)

	useEffect(() => {
		applyInterceptors(authState, setAuthState, resetAuthState)
	}, [])

	useEffect(() => {
		if (!hasRefreshed.current) {
			hasRefreshed.current = true
			wait(authApi.refresh(), resp => {
				if (resp.status === 'success') {
					setAuthState({ ...resp.body })
				}
			})
		}
	}, [])

	if (loading) {
		return <div></div>
	}

	if (!authState.accessToken) {
		return <Auth />
	}

	return <>{props.children}</>
}

export default AuthProvider
