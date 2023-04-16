import { axiosInstance } from '../_base/axiosInstance';

const URL_DEL_POST = '/postagem/:idPostagem/remover';

export async function deletePost(idPost) {
  await axiosInstance.delete(URL_DEL_POST.replace(':idPostagem', idPost));
}
