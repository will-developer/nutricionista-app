// src/components/Login.js
import React, { useState } from 'react';
import './CadastroPaciente.css'; // Você pode reutilizar os estilos

const Login = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para login
    console.log('Login:', { nome, sobrenome, dataNascimento });
  };

  return (
    <form className="cadastro-form" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Sobrenome"
        onChange={(e) => setSobrenome(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        onChange={(e) => setDataNascimento(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
