import { axiosInstance } from "../_base/axios-instance";

export async function deleteCharacterById(characterId) {
  await axiosInstance.post(`/user/me/characters/${characterId}/delete`);
}
