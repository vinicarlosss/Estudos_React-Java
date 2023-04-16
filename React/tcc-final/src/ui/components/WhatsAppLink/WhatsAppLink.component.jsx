import { AiOutlineWhatsApp } from 'react-icons/ai';
import './WhatsAppLink.style.css';
export function WhatsAppLink({ phoneNumber, message }) {
  function generateWhatsAppLink(phoneNumber, message) {
    const formatedNumber = phoneNumber.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/+55${formatedNumber}?text=${encodedMessage}`;
  }

  const url = generateWhatsAppLink(phoneNumber, message);
  return (
    <div className="whatsapp-link">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <AiOutlineWhatsApp /> <span>Telefone:</span> <span>{phoneNumber}</span>
      </a>
    </div>
  );
}
