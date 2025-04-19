// /models/game.js
module.exports = {
  async getTopGames() {
      const query = `SELECT g.title, AVG(r.rating) as avg_rating FROM games g
                     LEFT JOIN reviews r ON g.id = r.game_id
                     GROUP BY g.id
                     ORDER BY avg_rating DESC`;
      const result = await db.all(query);
      return result;
  }
};
