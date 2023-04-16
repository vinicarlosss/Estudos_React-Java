import { axiosInstance } from '../_base/axiosInstance';

const URL_DEL_SERVICO = '/servico/:idServiço/remover';

export async function deleteService(idServico) {
  await axiosInstance.delete(URL_DEL_SERVICO.replace(':idServiço', idServico));
}
