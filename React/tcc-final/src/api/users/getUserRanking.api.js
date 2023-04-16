import { axiosInstance } from '../_base/axiosInstance';

const USER_RANKING = '/usuarios/ranking';

export async function getUserRanking() {
  const response = await axiosInstance.get(USER_RANKING);
  return response.data;
}
