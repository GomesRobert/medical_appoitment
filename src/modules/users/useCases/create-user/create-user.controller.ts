
import { Request, Response } from "express"
import { logger } from "../../../../Utils/logger"
import { IUserRespository } from "../../repositories/user.repository"
import { IPasswprdCrypto } from "../../../../infra/shared/crypto/password.crypto"
import { CreateUseCase } from "./create-user.usecase"


export class CreateUserController {
  constructor(private userRepository: IUserRespository, private passwordCrypto: IPasswprdCrypto) { }

  async handle(request: Request, response: Response) {
    logger.info("Usuário sendo criado!")
    try {
      const data = request.body

      const useCase = new CreateUseCase(
        this.userRepository, this.passwordCrypto
      )
      const result = await useCase.execute(data)

      return response.json(result)
    } catch (err: any) {
      logger.error("err.stack")
      return response.status(err.statusCode).json(err.message)
    }
  }
}