import { useState } from "react";
import { registerUser } from "../../../api/auth/register-user.api";
import logo from "../../../assets/img/logo.png";
import "./register-user.style.css";

import { useNavigate } from "react-router-dom";

export function RegisterUser() {
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    requestResult: "",
  });
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await registerUser({
        username: formInput.username,
        password: formInput.password,
        confirmPassword: formInput.confirmPassword,
      });
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        requestResult: "O usuário foi cadastrado com sucesso.",
      }));
    } catch (error) {
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        requestResult: error.response.data.message,
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

  return (
    <main className="register-user_main">
      <a className="register-user_main--button" onClick={handleGoBack}>
        Voltar
      </a>
      <img src={logo} className="logo" />
      <form className="register-user_main--form" onSubmit={handleSubmit}>
        <h1>Cadastro de usuário</h1>
        <div className="register-user_input">
          <label className="register-user_form--label">Nome de usuário:</label>
          <input
            className="register-user_form--input-text"
            type="text"
            onChange={handleChange}
            name="username"
          />
        </div>
        <div className="register-user_input">
          <label className="register-user_form--label">Senha:</label>
          <input
            className="register-user_form--input-text"
            type="password"
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="register-user_input">
          <label className="register-user_form--label">
            Confirme sua senha:
          </label>
          <input
            className="register-user_form--input-text"
            type="password"
            onChange={handleChange}
            name="confirmPassword"
          />
        </div>
        {formInput.requestResult != "" ? (
          <p className="register-user_form--request-result">
            {formInput.requestResult}
          </p>
        ) : null}
        <button className="register-user_form--button">Cadastrar</button>
      </form>
    </main>
  );
}
