import React, { useState } from 'react';
import { db } from '../firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Use useNavigate em vez de window.location.href
import './CadastroPaciente.css';

const Login = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [erroLogin, setErroLogin] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const dataNascFormatada = new Date(dataNascimento);
      const q = query(
        collection(db, 'pacientes'),
        where('nome', '==', nome),
        where('dataNascimento', '==', dataNascFormatada),
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const paciente = querySnapshot.docs[0].data();
        setErroLogin('');
        localStorage.setItem('pacienteSelecionado', paciente.id);

        // Use navigate para redirecionar
        navigate(`/paciente/${paciente.id}`);
      } else {
        setErroLogin('Nome ou data de nascimento incorretos.');
      }
    } catch (error) {
      console.error('Erro ao fazer login: ', error);
      setErroLogin('Ocorreu um erro. Tente novamente mais tarde.');
    }
  };

  return (
    <form className="cadastro-form" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Nome Completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
        required
      />
      {erroLogin && <p style={{ color: 'red' }}>{erroLogin}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
