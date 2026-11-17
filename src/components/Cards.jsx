import React from 'react';

export function Cards() {
  return (
    <section id="servicos" className="cards-section">
      <h2>Nossos serviços</h2>
      <div className="cards-container">
        <div className="card">
          <h3>Desenvolvimento</h3>
          <p>Sistemas e aplicações web.</p>
        </div>
        <div className="card">
          <h3>Design</h3>
          <p>Interfaces modernas.</p>
        </div>
        <div className="card">
          <h3>Tecnologia</h3>
          <p>Soluções inteligentes.</p>
        </div>
      </div>
    </section>
  );
}