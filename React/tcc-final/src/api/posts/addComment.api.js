import { axiosInstance } from '../_base/axiosInstance';

const URL_COMMENTS_ID_POSTS = '/comentario/:idPost';

export async function addComment({ texto }, id) {
  const response = await axiosInstance.post(
    URL_COMMENTS_ID_POSTS.replace(':idPost', id),
    {
      texto: texto,
    }
  );
  return response.data;
}
