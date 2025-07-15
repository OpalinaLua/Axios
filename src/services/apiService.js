import { api } from "./api";

export const buscarUsuario = async ()=>{
    const { data } = await api.get("/users");
return data
}
export const criarUsuario=async(usuario)=>{
    const { data } = await api.post("users", usuario);
    return data
}
export const atualizarUsuario= async (id, usuario)=>{
    const {data}= await api.put(`users/${id}`, usuario)
    return data
    
}
export const deletarUsuario =async(id)=>{
    const {data}= await api.delete(`users/${id}`)
    return data
}