import { IValidationFunctionResponse } from './validation.types.ts'

const emailValidate = (email: string): IValidationFunctionResponse | null => {
  if (!email) {
    return { key: 'email', message: 'Введите email' }
  } else {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(email)) {
      return { key: 'email', message: 'Email введен неправильно' }
    }
  }
  return null
}

const fullNameValidate = (full_name: string): IValidationFunctionResponse | null => {
  if (!full_name) {
    return { key: 'full_name', message: 'Введите ФИО' }
  }
  return null
}

const passwordValidate = (password: string): IValidationFunctionResponse | null => {
  if (!password) {
    return { key: 'password', message: 'Введите пароль' }
  }
  return null
}

const validation = {
  fullNameValidate,
  passwordValidate,
  emailValidate,
}

export default validation
