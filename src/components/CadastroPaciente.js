import React, { useState } from 'react';
import { db } from '../firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import './CadastroPaciente.css';

const CadastroPaciente = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'pacientes'), {
        nome,
        idade: Number(idade),
        peso: Number(peso),
        altura: Number(altura),
        dataCadastro: new Date(),
        dataNascimento: new Date(dataNascimento),
        consultas: [],
      });
      alert('Paciente cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar paciente: ', error);
    }
  };

  return (
    <form className="cadastro-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome Completo"
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Idade"
        onChange={(e) => setIdade(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Peso (kg)"
        onChange={(e) => setPeso(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Altura (cm)"
        onChange={(e) => setAltura(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        onChange={(e) => setDataNascimento(e.target.value)}
        required
      />
      <button type="submit">Cadastrar Paciente</button>
    </form>
  );
};

export default CadastroPaciente;
