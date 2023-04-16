import { useState } from 'react';
import { addComment } from '../../api';
import { useToastContext } from '../../context/toast.context';

export function useAddPostComment() {
  const [formInputs, setFormInputs] = useState({ texto: '' });
  const addToast = useToastContext();

  function onAddCommentClick(idPost) {
    async function addCommentPost() {
      try {
        const text = formInputs[idPost] || '';
        if (text === '') {
          addToast('Comentário precisa ser preenchido');
        } else {
          await addComment(text, idPost);
          setFormInputs((oldFormInputs) => ({
            ...oldFormInputs,
            [idPost]: '',
          }));
        }
      } catch (error) {
        addToast(error.response.data.message);
      }
    }
    addCommentPost();
  }

  function handleChange(event, idPost) {
    const { name, value } = event.target;
    setFormInputs((oldFormInputs) => ({
      ...oldFormInputs,
      [idPost]: {
        ...oldFormInputs[idPost],
        [name]: value,
      },
    }));
  }

  return {
    formInputs,
    handleChange,
    onAddCommentClick,
  };
}
