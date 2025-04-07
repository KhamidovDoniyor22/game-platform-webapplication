// controllers/gamesController.js

// Dummy data with 9 distinct games
let games = [
  {
    id: 1,
    title: "CyberQuest1",
    description: "A futuristic action-adventure game set in a dystopian metropolis.",
    imageUrl: "/images/game-1.png",
    reviews: []
  },
  {
    id: 2,
    title: "Mystic Realms",
    description: "Explore mystical lands, complete quests, and battle mythical creatures.",
    imageUrl: "/images/game-2.png",
    reviews: []
  },
  {
    id: 3,
    title: "Galaxy Defender",
    description: "Defend the galaxy from interstellar threats in this epic space shooter.",
    imageUrl: "/images/game-3.png",
    reviews: []
  },
  {
    id: 4,
    title: "Ancient Empires",
    description: "Build your empire and conquer your enemies in this strategy game set in ancient times.",
    imageUrl: "/images/game-4.png",
    reviews: []
  },
  {
    id: 5,
    title: "Shadow Strike",
    description: "Stealth and precision define this action game where you take down targets from the shadows.",
    imageUrl: "/images/game-5.png",
    reviews: []
  },
  {
    id: 6,
    title: "Legend of the Dragon",
    description: "Embark on a quest to save the kingdom in this fantasy RPG featuring dragons and magic.",
    imageUrl: "/images/game-6.png",
    reviews: []
  },
  {
    id: 7,
    title: "Future Racer",
    description: "Race through futuristic tracks at breakneck speeds in this high-octane racing game.",
    imageUrl: "/images/game-7.png",
    reviews: []
  },
  {
    id: 8,
    title: "Dungeon Explorer",
    description: "Venture into dark dungeons filled with traps, treasures, and monsters.",
    imageUrl: "/images/game-8.png",
    reviews: []
  },
  {
    id: 9,
    title: "Space Odyssey",
    description: "Embark on an epic journey through space with immersive exploration and combat.",
    imageUrl: "/images/game-9.png",
    reviews: []
  }
];

exports.listGames = (req, res) => {
  res.render("games", { title: "All Games", games });
};

exports.showGameDetail = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const game = games.find(g => g.id === id);
  if (!game) return res.status(404).send("Game not found");

  // Calculate average rating
  if (game.reviews && game.reviews.length > 0) {
    const total = game.reviews.reduce((sum, review) => sum + review.rating, 0);
    game.overallRating = total / game.reviews.length;
  } else {
    game.overallRating = 0;
  }

  res.render("game", { title: game.title, game });
};


// Optional feedback submission if you have that feature
exports.submitFeedback = (req, res) => {
  const gameId = parseInt(req.params.id, 10);
  const game = games.find(g => g.id === gameId);
  if (!game) return res.status(404).send("Game not found");

  const { rating, comment } = req.body;
  if (!rating || !comment) return res.status(400).send("Rating and comment are required.");

  const newReview = {
    user: req.session.user ? req.session.user.username : "Guest",
    comment,
    rating: parseInt(rating, 10),
    date: new Date().toLocaleDateString()
  };

  game.reviews.push(newReview);
  res.redirect(`/games/${gameId}`);
};

exports.__getGames = () => games;
