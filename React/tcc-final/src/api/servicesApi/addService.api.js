import { axiosInstance } from '../_base/axiosInstance';

const URL_ADD_SERVICE = '/servico';

export async function addService(titulo, descricao, valor, imagem, categoria) {
  const response = await axiosInstance.post(URL_ADD_SERVICE, {
    titulo: titulo,
    descricao: descricao,
    valor: valor,
    imagem: imagem,
    categoria: categoria,
  });
  return response.data;
}
