import { useEffect, useRef, useState } from 'react';
import defaultAvatar from '../../../assets/default_avatar.jpg';
import useGlobalUser from '../../../context/user.context';
import {
  Pagination,
  useAddPost,
  useGetPosts,
  useGetUserRanking,
  usePagination,
} from '../../../hook/index';
import { Loading } from '../../components/Loading/loading.component';
import {
  Button,
  Footer,
  Header,
  Modal,
  PostModel,
  SideBar,
  TextInput,
} from '../../index';
import './posts.style.css';

export function Posts() {
  const { page, setPage } = usePagination();
  const [isPostChanged, setPostChanged] = useState(false);
  const {
    posts,
    fetchPosts,
    handleSearchPostChange,
    searchPostInput,
    totalPages,
    isLoading,
    allLikesFetched,
  } = useGetPosts(page);
  const commentInputRef = useRef(null);
  const [addCommentModal, setAddCommentModal] = useState(false);
  const [addPostModal, setAddPostModal] = useState(false);
  const [actualPost, setActualPost] = useState();
  const [actualPublisher, setActualPublisher] = useState();
  const { postInputs, handlePostInputChange, onAddPostClick } =
    useAddPost(setPostChanged);
  const [user] = useGlobalUser();
  const { userRankingData, fetchUserRanking } = useGetUserRanking();

  const toggleModal = (post, publisher) => {
    setAddCommentModal(!addCommentModal);
    setActualPost(post);
    setActualPublisher(publisher);
  };

  const togglePostModal = () => {
    setAddPostModal(!addPostModal);
  };

  useEffect(() => {
    if (searchPostInput.texto === '') {
      fetchPosts('');
    } else {
      fetchPosts(searchPostInput.texto);
    }

    setPostChanged(false);
  }, [allLikesFetched, isPostChanged, searchPostInput, page, totalPages]);

  useEffect(() => {
    fetchUserRanking();
  }, []);

  const scrollToCommentInput = (idPostagem) => {
    const commentInput = document.querySelector(`#comment-input-${idPostagem}`);
    commentInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <Header headerClass="header-follows-scroll" />
      {isLoading ? null : (
        <SideBar
          hamburguerFollowScroll="hamburguer-follow-scroll"
          followScroll="sidebar-follows-scroll"
          titulo="Ranking de pontuações"
          children={userRankingData.map(({ nome, foto, pontuacao }, index) => {
            let positionClassName = '';
            if (index === 0) {
              positionClassName = 'first-class';
            } else if (index === 1) {
              positionClassName = 'second-class';
            } else if (index === 2) {
              positionClassName = 'third-class';
            }
            return (
              <li key={index}>
                <div className={`ranking-container ${positionClassName}`}>
                  <h2>{index + 1}</h2>
                  <img src={foto || defaultAvatar} alt={nome} />
                  <div className="align-points">
                    <p>{nome}</p>
                    <p>{pontuacao}</p>
                  </div>
                </div>
              </li>
            );
          })}
        />
      )}
      <div className="center-posts">
        <div className="filter-posts">
          <TextInput
            className="text-input-posts-size"
            inputType="text"
            inputName="texto"
            placeholder="Pesquise por uma postagem"
            inputValue={searchPostInput.texto}
            onChange={handleSearchPostChange}
          />
          <Button onClick={togglePostModal} className="dashboard-title-button">
            +
          </Button>
        </div>
        {addPostModal && (
          <Modal toggleModal={togglePostModal}>
            <h1>Adicionar nova postagem</h1>
            <p>No que você está pensando?</p>
            <div className="new-post-input">
              <TextInput
                labelText="Texto da postagem*"
                forId="texto"
                inputType="text"
                inputName="texto"
                inputValue={postInputs.texto}
                placeholder="Escreva o que você está pensando..."
                onChange={handlePostInputChange}
              />
              <TextInput
                labelText="Imagem da postagem"
                inputType="text"
                inputName="imagem"
                forId="imagem"
                inputValue={postInputs.imagem}
                placeholder="Cole uma url de imagem com extensão png ou jpg"
                onChange={handlePostInputChange}
              />
              <Button
                onClick={() => {
                  onAddPostClick();
                  togglePostModal();
                }}
              >
                Postar
              </Button>
            </div>
          </Modal>
        )}

        {isLoading ? (
          <Loading />
        ) : (
          <PostModel
            posts={posts}
            user={user}
            scrollToCommentInput={scrollToCommentInput}
            toggleModal={toggleModal}
            actualPublisher={actualPublisher}
            commentInputRef={commentInputRef}
            setPostChanged={setPostChanged}
            actualPost={actualPost}
            addCommentModal={addCommentModal}
            searchPostInput={searchPostInput}
            fetchPosts={fetchPosts}
          />
        )}
        <Footer className="footer-follow-scroll" />
        <div className={`select-page ${isLoading && 'post-is-loading'}`}>
          {totalPages >= 1 && (
            <Pagination pages={totalPages} setCurrentPage={setPage} />
          )}
        </div>
      </div>
    </>
  );
}
