import { test, expect } from "vitest"
import { UserMemoryRepository } from "../../../users/repositories/implementations/user.memory.repository"
import { DoctorMemoryRepository } from "../../repositories/implementations/doctor-memory.repository"
import { CreateDoctorRequest, CreateDoctorUseCase } from "../../useCases/create-doctor/create-doctor.usecase"
import { Doctor } from "./doctor.entity"
import { randomUUID } from "crypto"
// Deve  set possível cadastrar um doctor
test("should be able to create a new doctor", () => {

  const doctor = Doctor.create({
    crm: "123456",
    email: " email@email.com",
    specialityId: "SPEC_ID",
    userId: "USER_ID",
  })

  console.log({ doctor })

  expect(doctor).toBeInstanceOf(Doctor);
  expect(doctor).toHaveProperty("id")
})

test("Should be able to create a new Doctor", async () => {

  const doctorMock: CreateDoctorRequest = {
    username: "username_test",
    name: "name_test",
    password: "password_test",
    email: "email@email.com.br",
    crm: "123456",
    specialityId: randomUUID(),
  }

  const userRepository = new UserMemoryRepository();
  const doctorRepository = new DoctorMemoryRepository()

  const createDoctorUseCase = new CreateDoctorUseCase(
    userRepository,
    doctorRepository
  )
  const doctorCreated = await createDoctorUseCase.execute(doctorMock)

  expect(doctorCreated).toHaveProperty("id")
})