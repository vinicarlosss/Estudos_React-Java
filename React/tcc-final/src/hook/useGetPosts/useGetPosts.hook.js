import { useEffect, useState } from 'react';
import { checkIsLiked, getAllPosts } from '../../api';
import { useToastContext } from '../../context/toast.context';

export function useGetPosts(page) {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [isLoading, setLoading] = useState(true);
  const [searchPostInput, setSearchPostInput] = useState({ texto: '' });
  const [allLikesFetched, setAllLikesFetched] = useState(false);
  const addToast = useToastContext();

  useEffect(() => {
    try {
      if (searchPostInput.texto === '') {
        setPosts([]);
        fetchPosts('');
      }
    } catch (error) {
      addToast(error.response.data.message);
    }
  }, [searchPostInput]);

  async function fetchPosts(texto) {
    try {
      const response = await getAllPosts({ texto, page });
      setTotalPages(response.totalPages);
      const postsWithLikesPromises = response.content.map(async (post) => {
        const userLiked = await checkIsLiked(post.idPostagem);
        return { ...post, userLiked };
      });
      const postsWithLikes = await Promise.all(postsWithLikesPromises);
      setAllLikesFetched(true);
      setPosts(postsWithLikes);
    } catch (error) {
      addToast(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSearchPostChange(event) {
    const { name, value } = event.target;

    setSearchPostInput((oldRegisterInputs) => ({
      ...oldRegisterInputs,
      [name]: value,
    }));
  }

  return {
    posts,
    setPosts,
    fetchPosts,
    handleSearchPostChange,
    searchPostInput,
    totalPages,
    isLoading,
    allLikesFetched,
  };
}
