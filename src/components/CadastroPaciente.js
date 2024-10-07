import React, { useState } from 'react';
import { db } from '../firebase/firestore'; // Certifique-se de que o caminho está correto
import { collection, addDoc } from 'firebase/firestore';

const CadastroPaciente = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'pacientes'), {
        nome,
        idade: Number(idade),
        peso: Number(peso),
        altura: Number(altura),
        dataCadastro: new Date(),
        consultas: [],
      });
      alert('Paciente cadastrado com sucesso!');
      // Limpa os campos após o cadastro
      setNome('');
      setIdade('');
      setPeso('');
      setAltura('');
    } catch (error) {
      console.error('Erro ao cadastrar paciente: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Altura (cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        required
      />
      <button type="submit">Cadastrar Paciente</button>
    </form>
  );
};

export default CadastroPaciente;
