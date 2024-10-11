import React, { useState } from 'react';
import './CadastroPaciente.css';

const Login = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { nome, dataNascimento });
  };

  return (
    <form className="cadastro-form" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Nome Completo"
        onChange={(e) => setNome(e.target.value)}
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
