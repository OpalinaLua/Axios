import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    try {
      const { data } = await api.get("/users");
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };
  const addUser = async () => {
    const newUser = {
      name: "lua",
      email: "fdssf@gmail.com",
    };
    const response = await api.post("users", newUser);
    setUsers((prev) => [...prev, response.data]);
  };
  console.log(users);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Meus repos Github</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <button onClick={() => addUser()}>adc usurario</button>
    </>
  );
}

export default App;
