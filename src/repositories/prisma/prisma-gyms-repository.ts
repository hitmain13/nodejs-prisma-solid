import { Gym, Prisma } from '@prisma/client'

import { FindManyNearbyGymsParams, GymRepository } from '../gyms-repository'

import { prisma } from '@/lib/prisma'

export class PrismaGymsRepository implements GymRepository {
  async findById(id: string) {
    const gym = await prisma.gym.findUnique({
      where: {
        id,
      },
    })

    return gym
  }

  async findManyNearby({ latitude, longitude }: FindManyNearbyGymsParams) {
    const MAX_DISTANCE_IN_KILOMETERS = 10
    const gyms = await prisma.$queryRaw<Gym[]>`
      SELECT * FROM gyms
      WHERE ( 6371 * acos( cos( radians(${latitude}) ) * cos( radians( latitude ) ) *
      cos( radians( longitude ) - radians(${longitude}) ) + sin( radians(${latitude}) ) *
      sin( radians( latitude ) ) ) ) <= ${MAX_DISTANCE_IN_KILOMETERS}
    `

    return gyms
  }

  async searchMany(query: string, page: number) {
    const gyms = await prisma.gym.findMany({
      where: {
        title: {
          contains: query,
        },
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return gyms
  }

  async create(data: Prisma.GymCreateInput) {
    const gym = await prisma.gym.create({
      data,
    })

    return gym
  }
}
