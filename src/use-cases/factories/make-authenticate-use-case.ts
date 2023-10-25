import { AuthenticateUseCase } from '../authenticate'

import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export function makeAuthenticateUseCase() {
  // SOLI(D)
  const usersRepository = new PrismaUsersRepository()
  const registerUseCase = new AuthenticateUseCase(usersRepository)

  return registerUseCase
}
