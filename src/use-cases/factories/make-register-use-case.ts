import { RegisterUseCase } from '../register'

import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export function makeRegisterUseCase() {
  // SOLI(D)
  const usersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}
