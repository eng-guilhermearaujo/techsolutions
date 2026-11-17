import React from 'react';
import { Cards } from '../components/Cards';
import { TextosImagens } from '../components/TextosImagens';

export function Home() {
  return (
    <main id="home" className="home-page">
      <div className="hero-section">
        <span className="hero-tag">TECNOLOGIA E INOVAÇÃO</span>
        <h1>Transformando ideias em soluções digitais</h1>
        <p>Desenvolvemos soluções tecnológicas para conectar pessoas, negócios e inovação.</p>
        
        {/* Banner principal moderno com temática de tecnologia/infraestrutura */}
        <div className="hero-image-container" style={{ marginTop: '30px' }}>
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" 
            alt="Infraestrutura de servidores e tecnologia avançada" 
            style={{ 
              width: '100%', 
              maxHeight: '450px', 
              objectFit: 'cover', 
              borderRadius: '12px', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)' 
            }}
          />
        </div>
      </div>

      <Cards />
      <TextosImagens />
    </main>
  );
}

export default Home;