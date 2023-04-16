import { axiosInstance } from '../_base/axiosInstance';

const URL_LIKE_POST = '/postagem/:id/curtir';

export async function like(id) {
  return await axiosInstance.patch(URL_LIKE_POST.replace(':id', id));
}
