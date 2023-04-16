import { axiosInstance } from '../_base/axiosInstance';

export async function getAllPosts({ texto, page }) {
  const response = await axiosInstance.get(
    `/postagem/listar?texto=${texto}&size=5&page=${page}&sort=id,desc`
  );
  return response.data;
}
