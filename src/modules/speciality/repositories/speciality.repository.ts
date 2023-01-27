import { Speciality } from "@prisma/client";


export interface ISpecialityRepository {
  save(data: Speciality): Promise<Speciality>
  findByName(name: string): Promise<Speciality | null>
  findById(id: string): Promise<Speciality | null>
}