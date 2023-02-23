import { axiosInstance } from "../_base/axios-instance";

export async function createCharacter({ name, raceId, faction }) {
  const response = await axiosInstance.post("/user/create-character", {
    name,
    raceId,
    faction,
  });
  return response.data;
}
