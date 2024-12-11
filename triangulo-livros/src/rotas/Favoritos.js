import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
`;

const Titulo = styled.h1`
  color: #333;
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Resultado = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

const livroImg = "https://via.placeholder.com/100x150"; // URL de exemplo para imagem de livro

function Favoritos({ favoritos = [] }) {
  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <ResultadoContainer>
        {favoritos.map((favorito) => (
          <Resultado key={favorito.id}>
            <img src={livroImg} alt={favorito.nome} />
            <p>{favorito.nome}</p>
          </Resultado>
        ))}
      </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos;
