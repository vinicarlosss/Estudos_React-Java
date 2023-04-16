import { like } from '../../api';
import { useToastContext } from '../../context/toast.context';
export function useLikeAndDeslikePost() {
  const addToast = useToastContext();

  function onLikeClick(id) {
    async function likePost() {
      try {
        await like(id);
      } catch (error) {
        addToast(error.response.data.message);
      }
    }
    likePost();
  }

  return { onLikeClick };
}
