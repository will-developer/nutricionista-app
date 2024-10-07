// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import CadastroPaciente from './components/CadastroPaciente';
import Login from './components/Login'; // Importando o componente de Login

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Header toggleForm={toggleForm} isLogin={isLogin} />
      <h1>Sistema de Nutricionista</h1>
      {isLogin ? <Login /> : <CadastroPaciente />}
    </div>
  );
}

export default App;
