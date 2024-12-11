const express = require("express");
const cors = require("cors");
const rotaFavorito = require("./rotas/favorito"); // Importa as rotas de favoritos

const app = express();

// Configurações
app.use(express.json());
app.use(cors({ origin: "*" })); // Permite conexões de qualquer origem

// Rotas
app.use("/favoritos", rotaFavorito); // Registra a rota /favoritos

// Porta do servidor
const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

