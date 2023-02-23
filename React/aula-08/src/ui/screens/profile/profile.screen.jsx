import { useCheckUser } from "../../../api/checkuser/usecheckuser.api"
import useGlobalUser from "../../../context/user.context"
import { logout } from "../../../api/user/login.api"
import noImage from "../../../assets/noimage.png"
import "./profile.style.css"

export function Profile() {
  const [user] = useGlobalUser()
  const { userDetails } = useCheckUser()
  async function handleLogout() {
    await logout()
  }
  return (
    <main className="profile-main">
      <h1 className="profile-title">
        Seja bem vindo(a) a Springfield, {user.username}.
      </h1>
      <div className="profile-content-box">
        <img
          src={userDetails.photo ? userDetails.photo : noImage}
          alt="user image"
          className="profile-img"
        ></img>
        <p className="profile-name">Nome Completo: {userDetails.fullName}</p>
      </div>

      <button className="profile-logout-button" onClick={handleLogout}>
        Sair
      </button>
    </main>
  )
}
