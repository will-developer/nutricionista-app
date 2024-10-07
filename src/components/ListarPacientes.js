// src/components/ListarPacientes.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

const ListarPacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  const fetchPacientes = async () => {
    const pacientesCollection = collection(db, 'pacientes');
    const pacientesSnapshot = await getDocs(pacientesCollection);
    const pacientesList = pacientesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPacientes(pacientesList);
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  return (
    <div>
      <h2>Lista de Pacientes</h2>
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>
            {paciente.nome}, Idade: {paciente.idade}, Peso: {paciente.peso},
            Altura: {paciente.altura}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarPacientes;
