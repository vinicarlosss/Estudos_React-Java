import { axiosInstance } from '../_base/axiosInstance';

const TASKS = '/tarefas/:id/concluir';

export async function completeTask(id) {
  const response = await axiosInstance.patch(TASKS.replace(':id', id));
  return response.data;
}
