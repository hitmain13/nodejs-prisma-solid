import { ValidateCheckInUseCase } from '../validate-check-in'

import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeValidateCheckInUseCase() {
  // SOLI(D)
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new ValidateCheckInUseCase(checkInsRepository)

  return useCase
}
