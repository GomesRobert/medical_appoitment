import { sign, verify } from "jsonwebtoken";
import { createHmac } from "crypto"

import { User } from "../../../modules/users/entities/user.entity";
import { IToken } from "./token";

export class JWTToken implements IToken {

  private TOKEN_SECRET = process.env.SECRET_KEY_TOKEN || '';

  private TOKEN_SECRET_CRYPTO = createHmac("sha256", this.TOKEN_SECRET).digest(
    "base64"
  )

  create({ username, isAdmin, id }: User): string {
    console.log("TOKEN_SECRET" + this.TOKEN_SECRET)
    console.log("TOKEN_SECRET_CRYPTO" + this.TOKEN_SECRET_CRYPTO)


    const token = sign({
      user: {
        username,
        isAdmin,
        id,
      },
    },
      this.TOKEN_SECRET_CRYPTO,
      {
        subject: id,
        expiresIn: "15m"
      })
    return token
  }

  valite(token: string): boolean {
    try {
      verify(token, this.TOKEN_SECRET_CRYPTO)
      return true
    } catch (err) {
      return false
    }
  }
}