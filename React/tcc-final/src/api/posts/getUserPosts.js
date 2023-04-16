import { axiosInstance } from '../_base/axiosInstance';

export async function getUserPosts({ page }) {
  const response = await axiosInstance.get(
    `/postagem/me/listar?page=${page}&size=2&sort=dataPublicacao,desc`
  );
  return response.data;
}
