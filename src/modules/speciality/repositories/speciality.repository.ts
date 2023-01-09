import { Speciality } from "@prisma/client";


export interface ISpecialityRepository {
  save(data: Speciality): Promise<Speciality>
}