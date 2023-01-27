import { CustomError } from "../../../../errors/custom.error";
import { Speciality } from "../../entities/speciality.entity"
import { ISpecialityRepository } from "../../repositories/speciality.repository";

type SpecialityRequest = {
  name: string,
  description: string
}


export class CreateSpeciality {
  constructor(private specialityRepository: ISpecialityRepository) { }

  async execute(data: SpecialityRequest) {
    const speciality = new Speciality(data);

    const existSpeciality = await this.specialityRepository.findByName(data.name)

    if (existSpeciality) {
      throw new CustomError(" Specality already exists!")
    }

    const specialityCreated = await this.specialityRepository.save(speciality)

    return specialityCreated
  }
}