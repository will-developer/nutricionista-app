import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Router e Routes
import Header from './components/Header';
import CadastroPaciente from './components/CadastroPaciente';
import Login from './components/Login';
import ListarPacientes from './components/ListarPacientes'; // Certifique-se de importar o novo componente

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Router>
      <div>
        <Header toggleForm={toggleForm} isLogin={isLogin} />
        <h1 style={{ textAlign: 'center' }}>Sistema de Nutricionista</h1>
        <Routes>
          <Route
            path="/"
            element={isLogin ? <Login /> : <CadastroPaciente />}
          />
          <Route path="/listar-pacientes" element={<ListarPacientes />} />{' '}
          {/* Adiciona a rota para ListarPacientes */}
          <Route
            path="/paciente/:id"
            element={<div>Perfil do Paciente</div>}
          />{' '}
          {/* Placeholder para o perfil do paciente */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
