import { useState, useEffect } from "react";
import {
  listar,
  inserir,
  alugar,
  devolver,
  detalhar,
  remover,
  alterar,
} from "../../api/filme/filme.api";

export function useFilmesApi() {
  const [filmes, setFilmes] = useState();

  async function fetchFilmes() {
    const response = await listar();
    setFilmes(response.data);
    return response;
  }

  async function register({ titulo, descricao, categoria, imagem }) {
    try {
      await inserir(titulo, descricao, categoria, imagem);
      return "Filme cadastrado com sucesso!";
    } catch (error) {
      return error.response.data.message;
    }
  }

  async function rent({ id, responsavel }) {
    try {
      await alugar(id, responsavel);
      return "Filme Alugado com sucesso";
    } catch (error) {
      return error.response.data.message;
    }
  }

  async function giveBack({ id }) {
    try {
      await devolver(id);
      return "Filme devolvido com sucesso";
    } catch (error) {
      return error.response.data.message;
    }
  }

  async function details({ id }) {
    const response = await detalhar(id);
    return response.data;
  }

  async function deleteMovie(id) {
    try {
      await remover(id);
      return "Filme removido com sucesso";
    } catch (error) {
      return error.response.data.message;
    }
  }

  async function changeMovie({ id, titulo, descricao, categoria, imagem }) {
    try {
      await alterar(id, titulo, descricao, categoria, imagem);
      return "Filme Alterado com sucesso";
    } catch (error) {
      return error.response.data.message;
    }
  }

  useEffect(() => {
    fetchFilmes();
  }, []);

  return {
    filmes,
    register,
    rent,
    giveBack,
    details,
    deleteMovie,
    changeMovie,
  };
}
