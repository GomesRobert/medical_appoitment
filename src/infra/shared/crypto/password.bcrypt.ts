import bcrypt from "bcryptjs";

import { IPasswprdCrypto } from "./password.crypto";

export class PasswordBcrypt implements IPasswprdCrypto {
  ;
  hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  }
  compare(password: string, passwordHash: string): Promise<boolean> {
    return bcrypt.compare(password, passwordHash)

  }
}