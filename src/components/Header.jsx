import React from 'react';

export function Header() {
  return (
    <header className="header">
      <div className="logo">🛡️ TechSolutions</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre</a>
      </nav>
    </header>
  );
}