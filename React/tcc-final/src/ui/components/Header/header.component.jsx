import { Link } from 'react-router-dom';
import avatarImage from '../../../assets/default_avatar.jpg';
import logo from '../../../assets/logo.png';
import useGlobalUser from '../../../context/user.context';
import { useLogout } from '../../../hook/useLogout/useLogout.hook';
import './header.style.css';

export function Header({ headerClass }) {
  const { handleLogout } = useLogout();
  const [user] = useGlobalUser();

  return (
    <header className={`header ${headerClass}`}>
      <div className="header-container">
        <img src={logo} alt="Logo do site My House Planner" />
        <nav>
          <ul className="menu">
            <li>
              <Link to="/home" className="link-transition">
                Início
              </Link>
            </li>
            <li>
              <Link to="/findPlace" className="link-transition">
                Encontre estabelecimentos
              </Link>
            </li>
            <li>
              <Link to="/posts" className="link-transition">
                Posts
              </Link>
            </li>
            <li>
              <Link to="/services" className="link-transition">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/list" className="link-transition">
                Lista de compras
              </Link>
            </li>
          </ul>
        </nav>
        <div className="avatar-logout-box">
          {user.foto ? (
            <img className="avatar-img" src={user.foto} alt="foto de usuário" />
          ) : (
            <img
              className="avatar-img"
              src={avatarImage}
              alt="foto de usuário"
            />
          )}
          <nav className="drop-down-menu">
            <ul className="drop-down-menu-list">
              <li className="drop-down-menu-item">
                <Link to="/profile" className="link-transition">
                  Meu perfil
                </Link>
              </li>
              <li className="drop-down-menu-item">
                <Link className="link-transition" onClick={handleLogout}>
                  Sair
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
