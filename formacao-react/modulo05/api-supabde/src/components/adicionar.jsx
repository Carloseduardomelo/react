import React from "react";
import { useState } from "react";


const Adicionar = () => {
  const [users, setUsers] = useState([]);
  const { client } = useSupabase();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email } = e.target.elements;

    const response = await client.from("users").insert({
      name,
      email,
    });

    if (response.error) {
      console.error(response.error);
    } else {
      setUsers([...users, response.data]);
    }
  };

  return (
    <div>
      <h1>Adicionar usuário</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default Adicionar;