import { CustomError } from "../../../../errors/custom.error"
import { ParameterRequiredError } from "../../../../errors/parameter-required.error"
import { IPasswprdCrypto } from "../../../../infra/shared/crypto/password.crypto"
import { User } from "../../entities/user.entity"
import { IUserRespository } from "../../repositories/user.repository"


type UserRequest = {
    name: string,
    username: string,
    password: string
}

export class CreateUseCase {

    constructor(private userRepository: IUserRespository, private passwordCrypto: IPasswprdCrypto) { }


    async execute(data: UserRequest) {
        const user = User.create(data)

        if (!data.username || !data.password) {
            throw new ParameterRequiredError("Username/password is required.", 422)
        }

        const existUser = await this.userRepository.findByUsername(data.username)

        if (existUser) {
            throw new CustomError("Username alreay exists", 400, "USER_EXISTS_ERROR")
        }

        const passwordHashed = await this.passwordCrypto.hash(data.password);
        user.password = passwordHashed
        const userCreated = await this.userRepository.save(user)

        return userCreated
    }
}