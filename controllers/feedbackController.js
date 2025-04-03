// controllers/feedbackController.js
const gamesController = require("./gamesController");

exports.addFeedback = (req, res) => {
  const gameId = parseInt(req.params.id, 10);
  const { comment, rating } = req.body;
  const games = gamesController.__getGames();
  const game = games.find(g => g.id === gameId);
  if (!game) {
    return res.status(404).send("Game not found");
  }
  // Add feedback as a review and/or comment (here we add it to reviews)
  const feedback = {
    user: req.session.user.username,
    comment,
    rating: parseFloat(rating)
  };
  game.reviews.push(feedback);
  res.redirect(`/games/${gameId}`);
};
