import cleaningImage from '../assets/default-cleaning-image.jpg';
import fixImage from '../assets/default-fix-image.jpg';
import petsImage from '../assets/default-pets-image.jpg';

export function selectServiceImageIfNotFound(category) {
  if (category === 'LIMPEZA') {
    return <img src={cleaningImage} alt={category} />;
  } else if (category === 'CUIDADOS_ANIMAIS') {
    return <img src={petsImage} alt={category} />;
  } else {
    return <img src={fixImage} alt={category} />;
  }
}
