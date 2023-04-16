import { useState } from 'react';
import { getUserPosts } from '../../api';
import { useToastContext } from '../../context/toast.context';

export function useGetUserPosts(page) {
  const [posts, setPosts] = useState([]);
  const addToast = useToastContext();

  async function fetchPosts() {
    try {
      const response = await getUserPosts({ page: page });
      setPosts((oldResponse) => [...oldResponse, ...response.content]);
    } catch (error) {
      addToast(error.response.data.message);
    }
  }

  return { posts, fetchPosts };
}
