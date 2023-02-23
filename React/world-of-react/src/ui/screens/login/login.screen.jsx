import { useEffect, useState } from "react";
import { login } from "../../../api/auth/login.api";
import { useNavigate } from "react-router-dom";
import useGlobalUser from "../../../context/user.context";
import logo from "../../../assets/img/logo.png";
import "./login.style.css";

export function Login() {
  const [formInput, setFormInput] = useState({
    user: "",
    password: "",
    error: "",
  });
  const [user, setUser] = useGlobalUser();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await login({
        username: formInput.user,
        password: formInput.password,
      });

      setUser(response);
    } catch (error) {
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        error: error.response.data.message,
      }));
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((oldFormInput) => ({
      ...oldFormInput,
      [name]: value,
    }));
  }

  useEffect(() => {
    if (formInput.user.length !== 0) {
      navigate("/home");
    }
  }, [user]);

  return (
    <main className="login_main">
      <img src={logo} className="logo" />
      <form className="login_form" onSubmit={handleSubmit}>
        <h1 className="login">Login</h1>
        <div className="login_input">
          <label>UserName:</label>
          <input
            type="text"
            className="login_input"
            name="user"
            onChange={handleChange}
          ></input>
        </div>
        <div className="login_input">
          <label>Senha:</label>
          <input
            type="password"
            className="login_input"
            name="password"
            onChange={handleChange}
          ></input>
        </div>
        {formInput.error != "" ? <p>{formInput.error}</p> : null}

        <div className="buttons_login">
          <button className="login_button">Entrar</button>
          <button
            className="login_button"
            onClick={() => navigate("/register-user")}
          >
            Criar Usuário
          </button>
        </div>
      </form>
    </main>
  );
}
