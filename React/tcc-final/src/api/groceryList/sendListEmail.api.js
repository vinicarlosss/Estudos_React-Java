import { axiosInstance } from '../_base/axiosInstance';

const GROCERIES_EMAIL = '/compras/email';
export async function sendListEmail() {
  const response = await axiosInstance.get(GROCERIES_EMAIL);
  return response.data;
}
