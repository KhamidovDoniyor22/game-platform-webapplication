// controllers/gamesController.js
// Dummy in-memory games array
let games = [
    {
      id: 1,
      title: "CyberQuest",
      description: "A futuristic action-adventure game set in a dystopian metropolis.",
      rating: 4.5,
      reviews: [
        { user: "gamer1", comment: "Amazing gameplay!", rating: 5 },
        { user: "gamer2", comment: "Great visuals but could use more story depth.", rating: 4 }
      ],
      comments: [
        { user: "gamer3", text: "When is the next update coming?" }
      ]
    },
    {
      id: 2,
      title: "Mystic Realms",
      description: "Explore mystical lands, complete quests, and battle mythical creatures.",
      rating: 4.0,
      reviews: [],
      comments: []
    }
  ];
  
  exports.listGames = (req, res) => {
    res.render("games", { title: "Games", games });
  };
  
  exports.showGameDetail = (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id, 10));
    if (!game) {
      return res.status(404).send("Game not found");
    }
    res.render("game", { title: game.title, game });
  };
  
  // Expose a getter for the games array for the feedback controller
  exports.__getGames = () => games;
  