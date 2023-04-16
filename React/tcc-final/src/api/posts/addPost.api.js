import { axiosInstance } from '../_base/axiosInstance';

const URL_POSTS = '/postagem';

export async function addPost(texto, imagem) {
  const response = await axiosInstance.post(URL_POSTS, {
    texto: texto,
    imagem: imagem,
  });
  return response.data;
}
