import { useEffect, useState } from 'react';
import avatarImage from '../../../assets/default_avatar.jpg';
import { useEditUser, usePagination } from '../../../hook';
import { useGetUserData } from '../../../hook/useGetUserData/useGetUserData.hook';
import { useGetUserPosts } from '../../../hook/useGetUserPosts/useGetUserPosts.hook';
import { Loading } from '../../components/Loading/loading.component';
import {
  Button,
  Footer,
  Header,
  Modal,
  PostCard,
  TextInput,
} from '../../index';
import './profile.style.css';

export function Profile() {
  const { userData, fetchUserData } = useGetUserData();
  const [changeUserModal, setChangeUserModal] = useState(false);
  const { handleEditChange, handleRegisterSubmit, editInputs } =
    useEditUser(userData);
  const { page, handleNextPage } = usePagination();
  const { posts, fetchPosts } = useGetUserPosts(page);
  const [isLoading, setLoading] = useState(true);

  const toggleModal = () => {
    setChangeUserModal(!changeUserModal);
  };

  useEffect(() => {
    if (page >= 0) {
      fetchPosts();
      setLoading(false);
    }
    fetchUserData();
  }, [page]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setLoading(true);
        handleNextPage();
      }
    });
    intersectionObserver.observe(document.querySelector('#sentinel'));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <main className="profile-main">
      <Header />
      <section className="profile-section">
        <section className="profile-user-info">
          {userData.foto ? (
            <img
              src={userData.foto}
              className="profile-user-photo"
              alt="foto do usuário"
            />
          ) : (
            <img
              className="profile-user-photo"
              src={avatarImage}
              alt="foto do usuário"
            />
          )}
          <p className="profile-user-info-item profile-username">
            {userData.nome}
          </p>
          <p className="profile-user-info-item">{userData.email}</p>
          <p className="profile-user-info-item">{userData.telefone}</p>
          <Button onClick={toggleModal}>Alterar perfil</Button>
        </section>
        <section className="profile-user-posts">
          <ul>
            {posts?.map((post) => {
              return (
                <li key={post.idPostagem} className="profile-post-item">
                  <PostCard userData={userData} post={post} />
                </li>
              );
            })}
            <li id="sentinel" className="profile-post-item"></li>
            {isLoading ? <Loading /> : null}
          </ul>
        </section>
      </section>
      <Footer />
      <form onSubmit={handleRegisterSubmit}>
        {changeUserModal && (
          <Modal toggleModal={toggleModal}>
            <TextInput
              labelText="Nome"
              inputName="nome"
              forId="name"
              inputValue={editInputs.nome}
              onChange={handleEditChange}
            />
            <TextInput
              labelText="Telefone"
              inputName="telefone"
              forId="telefone"
              inputValue={editInputs.telefone}
              onChange={handleEditChange}
            />
            <TextInput
              labelText="Foto de perfil"
              inputName="foto"
              forId="foto"
              inputValue={editInputs.foto}
              onChange={handleEditChange}
            />

            <Button>Alterar</Button>
          </Modal>
        )}
      </form>
    </main>
  );
}
