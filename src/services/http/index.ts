import { Dispatch, SetStateAction } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { Resetter } from 'recoil'

import { IHTTPErrorResponse, IHTTPSuccessResponse } from './http.types.ts'
import decodeTokenUtils from '../../utils/decodeToken.utils.ts'
import { IAuthState } from '../../screens/Auth/auth.atom.ts'
import authApi from '../../screens/Auth/auth.api.ts'
import config from '../../config.ts'

const http = axios.create({
	baseURL: config.API_URL,
	withCredentials: true,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization'
	}
})

let interceptorsApplied = false
export const applyInterceptors = (
	authState: IAuthState,
	setAuthState: Dispatch<SetStateAction<IAuthState>>,
	resetState: Resetter
) => {
	if (interceptorsApplied) return
	interceptorsApplied = true
	let isRefreshing = false

	let refreshRequest = Promise.resolve<IHTTPSuccessResponse<IAuthState>>({
		status: 'success',
		body: {
			accessToken: authState.accessToken,
			user: authState.user
		}
	})

	const tokenExpired = decodeTokenUtils.decode(authState.accessToken)
	let expDate: Date

	const refreshToken = (): Promise<IHTTPSuccessResponse<IAuthState>> => {
		if (isRefreshing) return refreshRequest
		isRefreshing = true

		// @ts-ignore
		refreshRequest = authApi.refresh().finally(() => (isRefreshing = false))
		return refreshRequest
	}

	const ensureAuthorization = (): Promise<IHTTPSuccessResponse<IAuthState>> => {
		if (tokenExpired) {
			expDate = new Date(tokenExpired?.exp * 1000)
		}
		const shouldRefresh = authState.accessToken === '' || expDate < new Date()
		// @ts-ignore
		return shouldRefresh ? refreshToken : Promise.resolve(authState)
	}

	http.interceptors.request.use(config => {
		return ensureAuthorization().then(result => {
			setAuthState({ ...result.body })

			config.headers.Authorization = `Bearer ${result.body.accessToken}`
			return config
		})
	})

	http.interceptors.response.use(
		res => res,
		err => {
			const shouldLogout = err.response && err.response.status === 401
			if (shouldLogout) resetState()
			throw err
		}
	)
}

export const handleHttpResponse = <T extends any>(
	response: AxiosResponse<T>
): IHTTPSuccessResponse<T> => {
	return { status: 'success', body: response.data }
}

export const handleHttpError = (error: AxiosError): IHTTPErrorResponse => {
	return {
		status: 'error',
		message: error?.message,
		code: error?.response?.status
	}
}

export default http
