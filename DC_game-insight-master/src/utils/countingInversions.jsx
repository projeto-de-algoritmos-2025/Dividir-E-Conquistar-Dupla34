
function countInversions(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        count++;
      }
    }
    return count;
  }
  
  // Função para recomendar jogos com base nas preferências do usuário
  export default function recommendGames(preferences, games) {
    // Array para armazenar as inversões de cada jogo
    let inversions = [];
  
    // Calcula as inversões para cada jogo
    for (let i = 0; i < games.length; i++) {
      let game = games[i];
      let gameGenres = game.genre;
      let gameRating = parseFloat(game.rating);
      let gameYear = parseInt(game.year);
  
      // Exemplo de cálculo de inversões baseado nas preferências do usuário
      let genreInversions = countInversions(preferences.genre, gameGenres);
      let ratingInversions = Math.abs(preferences.rating - gameRating);
      let yearInversions = Math.abs(preferences.year - gameYear);
  
      // Soma as inversões e armazena no array
      let totalInversions = genreInversions + ratingInversions + yearInversions;
      inversions.push({ game: game, inversions: totalInversions });
    }
  
    // Ordena os jogos com base no número de inversões (do menor para o maior)
    inversions.sort((a, b) => a.inversions - b.inversions);
  
    // Retorna apenas os jogos recomendados (com menor número de inversões)
    let recommendedGames = inversions.filter((game) => game.inversions === inversions[0].inversions);
    return recommendedGames.map((game) => game.game);
  }
