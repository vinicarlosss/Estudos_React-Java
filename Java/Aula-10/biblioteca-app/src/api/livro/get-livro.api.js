import { axiosInstance } from "../_base/axios-instance";

export async function getLivro(){
    const response = await axiosInstance.get("/livros")
    return response.data
}