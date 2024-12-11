const express = require("express");
const { getFavoritos } = require("../controladores/favorito"); // Importa o controlador

const router = express.Router();

// Define as rotas de favoritos
router.get("/", getFavoritos); // Rota para obter todos os favoritos

module.exports = router;

