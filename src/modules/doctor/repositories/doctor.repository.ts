import { Doctor } from "../entities/tests/doctor.entity";

export interface IDoctorRepository {
  save(data: Doctor): Promise<Doctor>
  findByCRM(crm: string): Promise<Doctor | null>
}