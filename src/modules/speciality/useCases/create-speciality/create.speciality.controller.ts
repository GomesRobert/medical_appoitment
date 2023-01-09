import { Request, response, Response } from "express";
import { ISpecialityRepository } from "../../repositories/speciality.repository";
import { CreateSpeciality } from "./create-speciality.useca";

export class CreateSpecialityController {
  constructor(private specialityRepository: ISpecialityRepository) { }


  async handle(request: Request, response: Response) {
    const useCase = new CreateSpeciality(this.specialityRepository);

    const result = await useCase.execute(request.body)

    return response.json(result)
  } catch(err: any) {
    return response.status(err.statusCode || 400).json({
      error: err.message
    })
  }
}