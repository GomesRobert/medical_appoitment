import { Speciality } from "@prisma/client";
import { prismaClient } from "../../../../infra/databases/prisma.config";
import { ISpecialityRepository } from "../speciality.repository";


export class SpecialityPrismaRepository implements ISpecialityRepository {
  async save(data: Speciality): Promise<Speciality> {

    const speciality = await prismaClient.speciality.create({
      data: {
        name: data.name,
        description: data.description,
        id: data.id,
      },
    })
    return speciality
  }
}