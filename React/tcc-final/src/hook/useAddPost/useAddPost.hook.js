import { useState } from 'react';
import { addPost } from '../../api/posts/addPost.api';
import { useToastContext } from '../../context/toast.context';

export function useAddPost(setPostChanged) {
  const [postInputs, setPostInputs] = useState({ texto: '', imagem: '' });
  const addToast = useToastContext();

  function onAddPostClick() {
    async function addUserPost() {
      try {
        if (postInputs.texto === '') {
          addToast('Texto precisa ser preenchido');
        } else {
          await addPost(postInputs.texto, postInputs.imagem);
          setPostChanged(true);
          setPostInputs((oldFormInputs) => ({
            ...oldFormInputs,
            texto: '',
            imagem: '',
          }));
        }
      } catch (error) {
        addToast(error.response.data.message);
      }
    }
    addUserPost();
  }

  function handlePostInputChange(event) {
    const { name, value } = event.target;

    setPostInputs((oldFormInputs) => ({
      ...oldFormInputs,
      [name]: value,
    }));
  }

  return {
    postInputs,
    handlePostInputChange,
    onAddPostClick,
  };
}
