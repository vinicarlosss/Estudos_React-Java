import { axiosInstance } from '../_base/axiosInstance';

const CREATE_TASK = '/tarefas';

export async function registerTask({ title, description, date, priority }) {
  const response = await axiosInstance.post(CREATE_TASK, {
    titulo: title,
    descricao: description,
    dataPrazo: date,
    prioridade: priority,
  });
  return response.data;
}
