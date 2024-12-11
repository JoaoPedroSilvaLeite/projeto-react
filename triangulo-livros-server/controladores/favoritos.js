const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../servicos/favorito");

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
}

function postFavorito(req, res) {
    try {
        const id = req.params.id;

        if (!id || isNaN(Number(id))) {
            res.status(422).json({ error: "ID inválido" });
            return;
        }

        insereFavorito(id);
        res.status(201).json({ message: "Livro inserido com sucesso" });
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id;

        if (!id || isNaN(Number(id))) {
            res.status(422).json({ error: "ID inválido" });
            return;
        }

        deletaFavoritoPorId(id);
        res.status(200).json({ message: "Favorito deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
};
