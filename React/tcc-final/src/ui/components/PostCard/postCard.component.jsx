import defaultAvatar from '../../../assets/default_avatar.jpg';
import noImage from '../../../assets/noImage.jpg';
import * as date from '../../../helpers/dateFunctions';
import { useDeletePost } from '../../../hook/useDeletePost/useDeletePost.hook';
import { AllCommentPosts } from '../AllCommentPosts/allCommentPosts.component';
import { ConfirmDeleteButton } from '../ConfirmButton/confirmDeleteButton.component';
import './postCard.style.css';

export function PostCard({ userData, post }) {
  const { onDeletePostClick } = useDeletePost();

  return (
    <section className="postCard-section">
      <div className="post-publisher">
        <img src={userData.foto || defaultAvatar} alt={userData.nome} />
        <div className="trash-can-position">
          <div>
            <p className="postCard-username">{userData.nome}</p>
            <p className="postCard-date">
              {date.getStandartDateTime(post?.dataPublicacao)}
            </p>
          </div>
          <div className="delete-button">
            <ConfirmDeleteButton
              onClick={() => {
                onDeletePostClick(post.idPostagem);
                setTimeout(() => {
                  window.location.reload(true);
                }, 1500);
              }}
            />
          </div>
        </div>
      </div>
      <div className="post-body user-post-body">
        <p>{post.texto}</p>
        {post.imagemPostagem ? (
          <img
            className="postCard-img"
            src={post?.imagemPostagem}
            alt="Imagem da postagem"
          />
        ) : (
          <img
            className="postCard-img"
            src={noImage}
            alt="Imagem da postagem"
          />
        )}
      </div>
      <div className="post-stats">
        <p>{post.curtidas} pessoas curtiram</p>
        <p>{post.comentarios.length} comentários</p>
      </div>
      <AllCommentPosts
        comentarios={post.comentarios}
        nomePublicador={post.nomePublicador}
      />
    </section>
  );
}
