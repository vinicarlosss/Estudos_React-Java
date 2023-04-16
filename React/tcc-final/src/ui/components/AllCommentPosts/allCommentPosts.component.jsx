import defaultAvatar from '../../../assets/default_avatar.jpg';
import './allComments.style.css';
export function AllCommentPosts({ comentarios, nomePublicador }) {
  return comentarios.length > 0 ? (
    <>
      <div className="comments-scroll">
        {comentarios.map((comentario, index) => (
          <div key={index} className="comment-container">
            <img
              src={comentario.fotoUsuario || defaultAvatar}
              alt={nomePublicador}
            />
            <div className="comment-data">
              <p>{comentario.nomeUsuario}</p>
              <p>{comentario.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : null;
}
