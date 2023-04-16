import commentIcon from '../../../assets/comment-icon.png';
import defaultAvatar from '../../../assets/default_avatar.jpg';
import heartIconNoLike from '../../../assets/like-heart-gray.svg';
import heartIconLike from '../../../assets/like-heart-red.svg';
import { getStandartDateTime } from '../../../helpers/dateFunctions';
import {
  useAddPostComment,
  useDeletePost,
  useLikeAndDeslikePost,
} from '../../../hook/index.js';
import {
  AllCommentPosts,
  Button,
  ConfirmDeleteButton,
  TextInput,
} from '../../index';
import './postModel.style.css';
export function PostModel({
  posts,
  user,
  setPostChanged,
  scrollToCommentInput,
  toggleModal,
  commentInputRef,
  actualPost,
  searchPostInput,
  fetchPosts,
}) {
  const { onLikeClick } = useLikeAndDeslikePost();
  const { onDeletePostClick } = useDeletePost();
  const { formInputs, handleChange, onAddCommentClick } = useAddPostComment();

  return posts.map(
    ({
      curtidas,
      dataPublicacao,
      imagemPostagem,
      imagemPublicador,
      nomePublicador,
      texto,
      comentarios,
      idPostagem,
      userLiked,
      usuarioId,
    }) => {
      const formattedDate = getStandartDateTime(dataPublicacao);
      return (
        <div key={idPostagem} className="posts-container">
          <div className="post-publisher">
            <img src={imagemPublicador || defaultAvatar} alt={nomePublicador} />
            <div className="trash-can-position">
              <div className="formatted-date-post">
                <p>{nomePublicador}</p>
                <p>{formattedDate}</p>
              </div>
              {user.idUsuario === usuarioId ? (
                <div className="delete-button">
                  <ConfirmDeleteButton
                    onClick={() => {
                      onDeletePostClick(
                        idPostagem,
                        fetchPosts,
                        searchPostInput,
                        posts
                      );
                      setPostChanged(true);
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="post-body">
            <p>{texto}</p>
            {imagemPostagem && (
              <img src={imagemPostagem} alt="Imagem da postagem" />
            )}
          </div>
          <div className="post-stats">
            <p>{curtidas} pessoas curtiram</p>
            <p>{comentarios.length} comentários</p>
          </div>
          <hr />
          <div className="post-actions">
            <div
              className="post-like"
              onClick={() => {
                setPostChanged(true);
                onLikeClick(idPostagem);
              }}
            >
              <img
                src={!userLiked.jaCurtiu ? heartIconNoLike : heartIconLike}
                alt="Ícone de coração para curtir a postagem"
              />
              <p>Curtir</p>
            </div>
            <div
              className="post-comment"
              onClick={() => scrollToCommentInput(idPostagem)}
            >
              <img
                src={commentIcon}
                alt="Ícone de comentário para adicionar um comentário na postagem"
              />
              <div>
                <p>Comentar</p>
              </div>
            </div>
          </div>
          <hr />
          <AllCommentPosts
            comentarios={comentarios}
            nomePublicador={comentarios.nomeUsuario}
          />

          <div
            onFocus={() => toggleModal(idPostagem, nomePublicador)}
            className="post-comment-input"
          >
            <TextInput
              forId={`comment-input-${idPostagem}`}
              className="text-input-posts-size"
              inputType="text"
              inputName="texto"
              inputValue={formInputs[idPostagem]?.texto || ''}
              placeholder="Escreva um comentário"
              forwardedRef={commentInputRef}
              onChange={(event) => handleChange(event, idPostagem)}
            />
            <Button
              onClick={() => {
                onAddCommentClick(actualPost);
                setPostChanged(true);
                toggleModal();
              }}
            >
              Postar
            </Button>
          </div>
        </div>
      );
    }
  );
}
