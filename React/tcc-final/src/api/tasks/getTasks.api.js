import { axiosInstance } from '../_base/axiosInstance';

const TASKS = '/tarefas?filtro=:filter&size=300';

export async function getAllTasks(filter) {
  const response = await axiosInstance.get(TASKS.replace(':filter', filter));
  return response.data;
}
