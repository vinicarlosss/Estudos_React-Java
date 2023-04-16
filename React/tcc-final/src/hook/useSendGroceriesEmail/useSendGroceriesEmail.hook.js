import { sendListEmail } from '../../api';
import { useToastContext } from '../../context/toast.context';

export function useSendGroceriesEmail() {
  const addToast = useToastContext();

  async function sendEmail(list) {
    if (list.length < 1) {
      addToast('Sua lista está vazia!');
    } else {
      if (window.confirm('Deseja enviar sua lista por email?') === true) {
        try {
          await sendListEmail();
          addToast('Lista enviada, cheque seu email.');
        } catch (error) {
          addToast(error.response.data.message);
        }
      }
    }
  }

  return {
    sendEmail,
  };
}
