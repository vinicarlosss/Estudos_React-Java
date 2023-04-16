import { axiosInstance } from '../_base/axiosInstance';

const URL_LIKED_POST = '/ja-curtiu';

export async function checkIsLiked(id) {
  const response = await axiosInstance.get(`${URL_LIKED_POST}/${id}`);
  return response.data;
}
