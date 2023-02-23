import { axiosInstance } from "../_base/axios-instance";

export async function listar() {
  const response = await axiosInstance.get("/filmes");
  return response;
}

export async function inserir(titulo, descricao, categoria, imagem) {
  const response = await axiosInstance.post("/filmes", {
    titulo: titulo,
    descricao: descricao,
    categoria: categoria,
    imagem: imagem,
  });
  return response.data;
}

export async function alugar(id, responsavel) {
  const response = await axiosInstance.put(`/filmes/${id}/alugar`, {
    responsavel: responsavel,
  });
  return response;
}

export async function devolver(id) {
  const response = await axiosInstance.put(`/filmes/${id}/devolver`);
  return response;
}

export async function detalhar(id) {
  const response = await axiosInstance.get(`/filmes/${id}`);
  return response;
}

export async function remover(id) {
  const response = await axiosInstance.delete(`/filmes/${id}`);
  return response;
}

export async function alterar(id, titulo, descricao, categoria, imagem) {
  const response = await axiosInstance.put(`/filmes/${id}`, {
    titulo: titulo,
    descricao: descricao,
    categoria: categoria,
    imagem: imagem,
  });
  return response;
}
