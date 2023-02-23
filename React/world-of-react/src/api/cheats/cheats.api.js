import { axiosInstance } from "../_base/axios-instance";

export async function apllyCheat({ code, characterId }) {
  const response = await axiosInstance.post("/cheat", {
    code,
    characterId,
  });
  return response.data;
}
