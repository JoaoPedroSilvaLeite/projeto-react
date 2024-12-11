const fs = require("fs");

// Função auxiliar para ler arquivos JSON
function lerArquivo(caminho) {
  try {
    const dados = fs.readFileSync(caminho, "utf-8");
    return dados ? JSON.parse(dados) : [];
  } catch (error) {
    console.error(`Erro ao ler o arquivo ${caminho}:`, error.message);
    return [];
  }
}

// Função auxiliar para escrever em arquivos JSON
function escreverArquivo(caminho, dados) {
  try {
    fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
  } catch (error) {
    console.error(`Erro ao escrever no arquivo ${caminho}:`, error.message);
  }
}

// Retorna todos os favoritos
function getTodosFavoritos() {
  return lerArquivo("favoritos.json");
}

// Deleta um favorito por ID
function deletaFavoritoPorId(id) {
  const favoritos = lerArquivo("favoritos.json");

  const favoritosFiltrados = favoritos.filter((favorito) => favorito.id !== id);

  if (favoritos.length === favoritosFiltrados.length) {
    console.warn(`Nenhum favorito encontrado com o ID ${id}`);
  } else {
    console.log(`Favorito com o ID ${id} deletado.`);
  }

  escreverArquivo("favoritos.json", favoritosFiltrados);
}

// Insere um novo favorito
function insereFavorito(id) {
  const livros = lerArquivo("livros.json");
  const favoritos = lerArquivo("favoritos.json");

  const livroInserido = livros.find((livro) => livro.id === id);

  if (!livroInserido) {
    console.error(`Livro com o ID ${id} não encontrado.`);
    return;
  }

  const jaFavorito = favoritos.some((favorito) => favorito.id === id);
  if (jaFavorito) {
    console.warn(`Livro com o ID ${id} já é um favorito.`);
    return;
  }

  const novaListaDeFavoritos = [...favoritos, livroInserido];
  escreverArquivo("favoritos.json", novaListaDeFavoritos);

  console.log(`Livro com o ID ${id} adicionado aos favoritos.`);
}

module.exports = {
  getTodosFavoritos,
  deletaFavoritoPorId,
  insereFavorito,
};
