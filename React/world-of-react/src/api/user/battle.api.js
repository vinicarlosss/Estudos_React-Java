import { axiosInstance } from "../_base/axios-instance";

export async function startBattle({ characterId, opponentId }) {
  const response = await axiosInstance.post(
    `/user/me/characters/${characterId}/battle`,
    {
      opponentId,
    }
  );
  return response.data;
}
