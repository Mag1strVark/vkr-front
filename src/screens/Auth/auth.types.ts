import { UserRoleEnum } from '../../enums/userRole.enum.ts'

export interface ILoginDTO {
  email: string
  password: string
}

export interface IRegisterDTO extends ILoginDTO {
  full_name: string
  role: UserRoleEnum
}
