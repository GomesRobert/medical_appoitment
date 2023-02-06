import dayjs from "dayjs";
import { describe, expect, test } from "vitest";
import { generateUUID } from "../../../../../Utils/generateUUID";
import { DoctorMemoryRepository } from "../../../repositories/implementations/in-memory/doctor-memory.repository";
import { CreateDoctorInfoUseCase, DoctorInfoRequest } from "../create-doctor-info.usecase";






describe("Create Doctor Info", () => {
  test("Should not be able to create a doctor info if doctor does not exists!", () => {
    const doctorRepositoty = new DoctorMemoryRepository()
    const createDoctorInfoUseCase = new CreateDoctorInfoUseCase(doctorRepositoty)

    const doctorInfo: DoctorInfoRequest = {
      startAt: dayjs().startOf("day").add(10, "hour").format("HH:mm"),
      endAt: dayjs().startOf("day").add(18, "hour").format("HH:mm"),
      price: 150,
      duration: 10,
    }

    expect(async () => {
      await createDoctorInfoUseCase.execute(doctorInfo, "INVALID_USER_ID")
    }).rejects.toThrow("Doctor does not exists!")
  })

  test("Should not be able to create a doctor info if endAt is before startAt ", async () => {
    const doctorRepositoty = new DoctorMemoryRepository()
    const createDoctorInfoUseCase = new CreateDoctorInfoUseCase(
      doctorRepositoty
    )

    const userId = generateUUID()

    await doctorRepositoty.save({
      crm: "123456",
      email: "doctor@test.com.br",
      id: generateUUID(),
      specialityId: generateUUID(),
      userId
    })

    const doctorInfo: DoctorInfoRequest = {
      startAt: dayjs().startOf("day").add(18, "hour").format("HH:mm"),
      endAt: dayjs().startOf("day").add(10, "hour").format("HH:mm"),
      price: 150,
      duration: 10,
    }

    expect(async () => {
      await createDoctorInfoUseCase.execute(doctorInfo, userId)
    }).rejects.toThrow("Doctor does not exists!")
  })
})
