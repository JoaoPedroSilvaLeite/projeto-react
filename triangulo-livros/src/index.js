import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/Home'
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './componentes/Header';
import Favoritos from './rotas/Favoritos';

// Estilo global
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;    
  }
`;

// Renderização principal
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      {/* Cabeçalho visível em todas as rotas */}
      <Header />
      <Routes>
        {/* Rotas da aplicação */}
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Medição de desempenho (opcional)
reportWebVitals();
