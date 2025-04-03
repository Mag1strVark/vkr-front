import axios from 'axios'

import { IHTTPErrorResponse, IHTTPSuccessResponse } from '../../services/http/http.types.ts'
import { handleHttpError, handleHttpResponse } from '../../services/http'
import { ILoginDTO, IRegisterDTO } from './auth.types.ts'
import { IAuthState } from './auth.atom.ts'
import config from '../../config.ts'

const withCredentials = { withCredentials: true }

const register = (dto: IRegisterDTO): Promise<IHTTPSuccessResponse<IAuthState> | IHTTPErrorResponse> => {
  return axios
    .post(config.API_URL + '/api/auth/register', dto, withCredentials)
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const login = (dto: ILoginDTO): Promise<IHTTPSuccessResponse<IAuthState> | IHTTPErrorResponse> => {
  return axios
    .post(config.API_URL + '/api/auth/login', dto, withCredentials)
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const refresh = (): Promise<IHTTPSuccessResponse<IAuthState> | IHTTPErrorResponse> => {
  return axios
    .get(config.API_URL + '/api/auth/refresh', withCredentials)
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const logout = (): Promise<IHTTPSuccessResponse<boolean> | IHTTPErrorResponse> => {
  return axios
    .get(config.API_URL + '/api/auth/logout', withCredentials)
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const authApi = {
  register,
  refresh,
  logout,
  login,
}

export default authApi
