import { useEffect, useState } from 'react';
import { AiFillQuestionCircle, AiOutlineMail } from 'react-icons/ai';
import defaultAvatar from '../../../assets/default_avatar.jpg';
import useGlobalUser from '../../../context/user.context';
import { getStandartDateTime } from '../../../helpers/dateFunctions';
import { selectServiceImageIfNotFound } from '../../../helpers/selectServiceImage';
import { useDeleteService } from '../../../hook';
import { ConfirmDeleteButton, WhatsAppLink } from '../../index';
import './serviceCard.style.css';
export function ServiceCard({
  categoryImage,
  userImage,
  category,
  title,
  description,
  userName,
  valor,
  telefonePrestador,
  emailPrestador,
  dataPublicacao,
  page,
  idServico,
  idUsuario,
  setServiceChange,
  services,
}) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [user] = useGlobalUser();
  const { onDeleteServiceClick } = useDeleteService(services);

  const handleClick = () => {
    if (showOverlay) {
      setShowOverlay(false);
      setIsOverlayVisible(true);
    } else {
      setShowOverlay(true);
      setIsOverlayVisible(false);
    }
  };

  function renderShowOverlay() {
    if (showOverlay) {
      return (
        <div className="overlay-services-card">
          <div>
            <div className="provider-information">
              <div>
                <img src={userImage || defaultAvatar} alt="default" />
                <p>{userName}</p>
              </div>
            </div>
            <div className="overlay-services-card-content">
              <p>
                <b>Data da publicação do serviço</b>:<br />
                {getStandartDateTime(dataPublicacao)}
              </p>
              <div>
                {valor === 0 ? (
                  <p>
                    <b>Valor</b>: A negociar
                  </p>
                ) : (
                  <p>
                    <b>Valor:</b> {valor} R$
                  </p>
                )}
              </div>
              <WhatsAppLink
                phoneNumber={telefonePrestador}
                message={`Olá! Vi o seu anúncio sobre o serviço de ${category}: "${title}" e gostaria de tirar algumas dúvidas.`}
              />
              <div className="email-services">
                <AiOutlineMail /> <span>Email:</span> {emailPrestador}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return isOverlayVisible && <div className="close-overlay-services"></div>;
  }

  useEffect(() => {
    setShowOverlay(false);
    setIsOverlayVisible(false);
  }, [page]);

  return (
    <div className="service-container">
      {idUsuario === user.idUsuario ? (
        <div className="delete-button-service">
          <ConfirmDeleteButton
            onClick={() => {
              onDeleteServiceClick(idServico, setServiceChange);
            }}
          />
        </div>
      ) : null}
      {categoryImage ? (
        <img src={categoryImage} alt={category} />
      ) : (
        selectServiceImageIfNotFound(category)
      )}
      <div className="service-content">
        {category === 'CUIDADOS_ANIMAIS' ? (
          <p>CUIDADOS COM ANIMAIS</p>
        ) : (
          <p>{category}</p>
        )}
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div className="provider-information">
        <div>
          <img src={userImage || defaultAvatar} alt="default" />
          <p>{userName}</p>
        </div>
        {renderShowOverlay()}

        <AiFillQuestionCircle
          className="point-info-question-service"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
