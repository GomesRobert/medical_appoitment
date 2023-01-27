import { CustomError } from "../../../../errors/custom.error"
import { ISpecialityRepository } from "../../../speciality/repositories/speciality.repository"
import { User } from "../../../users/entities/user.entity"
import { IUserRespository } from "../../../users/repositories/user.repository"
import { Doctor } from "../../entities/tests/doctor.entity"
import { IDoctorRepository } from "../../repositories/doctor.repository"

export type CreateDoctorRequest = {
  username: string,
  name: string,
  password: string,
  email: string,
  crm: string,
  specialityId: string
}

export class CreateDoctorUseCase {

  constructor(
    private userRepository: IUserRespository,
    private doctorRepository: IDoctorRepository,
    private specialityRepository: ISpecialityRepository
  ) { }

  async execute(data: CreateDoctorRequest) {
    const user = User.create({
      name: data.name,
      password: data.password,
      username: data.username,
    })

    const speciality = await this.specialityRepository.findById(
      data.specialityId)

    if (!speciality) {
      throw new CustomError("Speciality does not exists!", 400)
    }

    const existUser = await this.userRepository.findByUsername(data.username)

    if (existUser) {
      throw new CustomError("Username alreay exists", 400, "USER_EXISTS_ERROR")
    }

    const userCreated = await this.userRepository.save(user)

    const doctor = Doctor.create({
      crm: data.crm,
      email: data.email,
      specialityId: data.specialityId,
      userId: userCreated.id
    })

    const crmExists = await this.doctorRepository.findByCRM(data.crm)

    if (crmExists) {
      throw new CustomError(" CRM already exists", 400)
    }

    const doctorCreated = await this.doctorRepository.save(doctor)

    return doctorCreated;
  }
}