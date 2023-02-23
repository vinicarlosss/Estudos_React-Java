import { axiosInstance } from "../_base/axios-instance";

export async function registerUser({ username, password, confirmPassword }) {
  const response = await axiosInstance.post("/auth/register", {
    username,
    password,
    confirmPassword,
  });
  return response.data;
}
