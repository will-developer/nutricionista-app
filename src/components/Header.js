// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ toggleForm, isLogin }) => {
  return (
    <header className="header">
      <div className="logo">Nutrisystem</div>
      <div className="auth-buttons">
        <button className="button" onClick={toggleForm}>
          {isLogin ? 'Cadastro' : 'Login'}
        </button>
      </div>
    </header>
  );
};

export default Header;
