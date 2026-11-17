import React from 'react';

export function TextosImagens() {
  return (
    <section id="sobre" className="textos-imagens-section" style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '40px', flexWrap: 'wrap' }}>
      <div className="sobre-conteudo" style={{ flex: 1, minWidth: '280px' }}>
        <h2>Conheça nossa empresa</h2>
        <p style={{ lineHeight: '1.6', color: '#475569' }}>
          A TechSolutions acredita que a tecnologia pode transformar o futuro. Nossa equipe desenvolve soluções digitais avançadas para facilitar processos, otimizar operações e melhorar resultados corporativos com inovação e segurança.
        </p>
      </div>
      
      <div className="sobre-imagem" style={{ flex: 1, minWidth: '280px' }}>
        <img 
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
          alt="Equipe de tecnologia colaborando" 
          style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
        />
      </div>
    </section>
  );
}