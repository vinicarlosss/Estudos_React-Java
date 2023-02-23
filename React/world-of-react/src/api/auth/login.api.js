import { axiosInstance } from "../_base/axios-instance";

export async function login({ username, password }) {
  const response = await axiosInstance.post(
    "/auth/login",
    {},
    {
      auth: {
        username,
        password,
      },
    }
  );
  return response.data;
}
