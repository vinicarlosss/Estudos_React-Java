import { deletePost } from '../../api';
import { useToastContext } from '../../context/toast.context';

export function useDeletePost() {
  const addToast = useToastContext();
  function onDeletePostClick(idPost, fetchPosts, searchPostInput, posts) {
    async function deleteUserPost() {
      try {
        await deletePost(idPost);
        addToast('Postagem deletada com sucesso');
        if (posts.length === 1) {
          fetchPosts('');
          searchPostInput.texto = '';
          window.location.reload(true);
        } else {
          fetchPosts(searchPostInput.texto);
        }
      } catch (error) {
        addToast(error.response.data.message);
      }
    }
    deleteUserPost();
  }

  return {
    onDeletePostClick,
  };
}
