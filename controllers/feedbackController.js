// controllers/feedbackController.js
const gamesController = require("./gamesController");

exports.addFeedback = (req, res) => {
  const gameId = parseInt(req.params.id, 10);
  const game = gamesController.__getGames().find(g => g.id === gameId);
  if (!game) {
    return res.status(404).send("Game not found");
  }

  console.log("DEBUG: Incoming rating:", req.body.rating);
  console.log("DEBUG: Incoming comment:", req.body.comment);

  const newReview = {
    user: req.session.user ? req.session.user.username : "Anonymous",
    comment: req.body.comment,
    rating: Number(req.body.rating), // Ensure this is numeric
    date: new Date().toLocaleDateString(),
  };

  game.reviews.push(newReview);
  console.log("DEBUG: Updated reviews:", game.reviews);

  res.redirect(`/games/${gameId}`);
};

