import { test, expect, describe } from "vitest"
import { Doctor } from "../doctor.entity"

describe("Doctor entity", () => {
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

  test("Should not be able to create a new Doctor witch CRM invalid", () => {
    expect(() => {
      Doctor.create({
        crm: "",
        email: "email@email.com",
        specialityId: "Spec_ID",
        userId: "USER_ID",
      })
    }).toThrow("CMR is required!")
  })
  test("Should not be able to create a new Doctor witch CRM length invalid", () => {
    expect(() => {
      Doctor.create({
        crm: "12345",
        email: "email@email.com",
        specialityId: "Spec_ID",
        userId: "USER_ID",
      })
    }).toThrow("CMR length is incorrect")
  })

  test("Should not be able to create a new Doctor witch Email invalid", () => {
    expect(() => {
      Doctor.create({
        crm: "123456",
        email: "",
        specialityId: "Spec_ID",
        userId: "USER_ID",
      })
    }).toThrow("Email is required!")
  })
})
