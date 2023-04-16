import defaultAvatar from '../../../assets/default_avatar.jpg';

export function PostComment({ comentarios, imagemPublicador, nomePublicador }) {
  return comentarios.length > 0 ? (
    <>
      <div className="comment-container">
        <img src={imagemPublicador || defaultAvatar} alt={nomePublicador} />
        <div className="comment-data">
          <p>{nomePublicador}</p>
          <p>{comentarios[comentarios.length - 1].texto}</p>
        </div>
      </div>
    </>
  ) : null;
}
