import { axiosInstance } from "../_base/axios-instance"

export async function login({ username, password }) {
  await axiosInstance.post(
    "/login",
    {},
    {
      auth: {
        username,
        password,
      },
    }
  )
}

export async function getUser() {
  const response = await axiosInstance.get("/me")
  return response
}

export async function logout() {
  return await axiosInstance.post("/logout")
}
