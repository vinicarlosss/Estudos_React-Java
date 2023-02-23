import "./login.style.css"
import { useEffect, useState } from "react"
import { login } from "../../../api/user/login.api"
import { useGlobalUser } from "../../../context/user.context"
import { useNavigate } from "react-router-dom"

export function Login() {
  const [formInput, setFormInput] = useState({
    nickname: "",
    password: "",
    error: "",
  });
  const [user, setUser] = useGlobalUser()
  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((oldFormInput) => ({ ...oldFormInput, [name]: value }))
  }
  async function handleSubmit(event) {
    event.preventDefault();
    let errorElement = document.getElementsByClassName("form-login-error")
    try {
      await login({
        username: formInput.nickname,
        password: formInput.password,
      });
      errorElement[0].style.visibility = ""
      setFormInput((oldFormInput) => ({ ...oldFormInput, error: "" }))
      setUser({ username: formInput.nickname })
      navigate("/perfil")
    } catch (error) {
      errorElement[0].style.visibility = "visible"
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        error: "Usuário ou senha inválidos",
      }))
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/perfil")
    }
  }, [user, navigate])

  return (
    <main className="login-main">
      <form className="login-form" onSubmit={handleSubmit}>
        <header className="login-header">
          <h1 className="login-title">Login</h1>
        </header>
        <label className="input-label">Nome:</label>
        <input
          className="login-input"
          type="text"
          name="nickname"
          onChange={handleChange}
        />
        <label className="input-label">Senha: </label>
        <input
          className="login-input"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button className="login-form-button">Entrar</button>
        <p className="form-login-error">{formInput.error}</p>
      </form>
    </main>
  )
}
