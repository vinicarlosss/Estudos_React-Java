import { axiosInstance } from '../_base/axiosInstance';

const TASKS = '/tarefas/:id/remover';

export async function removeTask(id) {
  const response = await axiosInstance.delete(TASKS.replace(':id', id));
  return response.data;
}
