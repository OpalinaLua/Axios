import { useEffect, useState } from "react";
import "./App.css";
import {
  atualizarUsuario,
  buscarUsuario,
  criarUsuario,
  deletarUsuario,
} from "./services/apiService";
import { PenLine, Trash2 } from "lucide-react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const getData = async () => {
    try {
      const userData = await buscarUsuario();
      setUsers(userData);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };
  const addUser = async () => {
    const newUser = {
      name: "lua",
      email: "fdssf@gmail.com",
    };
    const usuarioCriado = await criarUsuario(newUser);
    setUsers((prev) => [...prev, usuarioCriado]);
  };
  const atualizaUsuario = async (id) => {
    const newUser = {
      name: "lua",
      email: "fdssf@gmail.com",
    };
    const usuarioAtualizado = await atualizarUsuario(id, newUser);
    setUsers((prev) =>
      prev.map((item) =>
        item.id === usuarioAtualizado.id ? usuarioAtualizado : item
      )
    );
  };
  const handleDeletarUsario = async (id) => {
    await deletarUsuario(id);
    const novaLista = users.filter((user) => user.id !== id);
    setUsers(novaLista);
  };
  console.log(users);

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <h1>carregando...</h1>;
  }
  return (
    <>
      <h1>Usuario</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => handleDeletarUsario(user.id)}>
            <Trash2 size={15} />
          </button>
          <button onClick={() => atualizaUsuario(user.id)}>
            <PenLine size={15} />
          </button>
        </div>
      ))}
      <button onClick={() => addUser()}>adicionar usurario</button>
    </>
  );
}

export default App;
