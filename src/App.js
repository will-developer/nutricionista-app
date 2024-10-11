import React, { useState } from 'react';
import Header from './components/Header';
import CadastroPaciente from './components/CadastroPaciente';
import Login from './components/Login';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Header toggleForm={toggleForm} isLogin={isLogin} />
      <h1 style={{ textAlign: 'center' }}>Sistema de Nutricionista</h1>
      {isLogin ? <Login /> : <CadastroPaciente />}
    </div>
  );
}

export default App;
