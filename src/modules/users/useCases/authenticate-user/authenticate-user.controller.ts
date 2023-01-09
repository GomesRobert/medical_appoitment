import { Request, Response } from "express";
import { IPasswprdCrypto } from "../../../../infra/shared/crypto/password.crypto";
import { IToken } from "../../../../infra/shared/token/token";
import { IUserRespository } from "../../repositories/user.repository";
import { AuthenticateUserUseCase } from "./authenticate-user.usecase";


export class AuthenticateUserController {

  constructor(
    private userRepository: IUserRespository,
    private passwordCrypt: IPasswprdCrypto,
    private token: IToken
  ) { }

  async handle(request: Request, response: Response) {
    try {
      const data = request.body

      const authenticateUserUseCase = new AuthenticateUserUseCase(
        this.userRepository,
        this.passwordCrypt,
        this.token
      );

      const result = await authenticateUserUseCase.execute(data)

      return response.json(result)
    } catch (err: any) {
      return response.status(err.statusCode).json({
        error: err.message,
      })
    }
  }
}
