import React, { useState } from 'react';
import { db } from '../firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

const RegistroConsulta = () => {
  const [pacienteId, setPacienteId] = useState('');
  const [data, setData] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'consultas'), {
        pacienteId,
        data: new Date(data),
        observacoes,
      });
      alert('Consulta registrada com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar consulta: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ID do Paciente"
        onChange={(e) => setPacienteId(e.target.value)}
        required
      />
      <input type="date" onChange={(e) => setData(e.target.value)} required />
      <textarea
        placeholder="Observações"
        onChange={(e) => setObservacoes(e.target.value)}
        required
      />
      <button type="submit">Registrar Consulta</button>
    </form>
  );
};

export default RegistroConsulta;
