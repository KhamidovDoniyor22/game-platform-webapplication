// controllers/gamesController.js

// Dummy in-memory games array with 9 games
let games = [
  {
    id: 1,
    title: "CyberQuest",
    description: "A futuristic action-adventure game set in a dystopian metropolis.",
    imageUrl: "", // Will use fallback "/images/game-1.jpg" if empty
    reviews: [
      { user: "gamer1", comment: "Amazing gameplay!", rating: 5, date: "March 11, 2025" },
      { user: "gamer2", comment: "Great visuals but could use more story depth.", rating: 4, date: "March 12, 2025" }
    ],
    comments: []
  },
  {
    id: 2,
    title: "Mystic Realms",
    description: "Explore mystical lands, complete quests, and battle mythical creatures.",
    imageUrl: "",
    reviews: [
      { user: "gamer3", comment: "A magical experience!", rating: 5, date: "March 13, 2025" }
    ],
    comments: []
  },
  {
    id: 3,
    title: "Galaxy Defender",
    description: "Defend the galaxy from interstellar threats in this epic space shooter.",
    imageUrl: "",
    reviews: [
      { user: "gamer4", comment: "Super addictive and fun!", rating: 5, date: "March 15, 2025" },
      { user: "gamer5", comment: "A bit repetitive, but still great.", rating: 4, date: "March 16, 2025" }
    ],
    comments: []
  },
  {
    id: 4,
    title: "Ancient Empires",
    description: "Build your empire and conquer your enemies in this strategy game set in ancient times.",
    imageUrl: "",
    reviews: [
      { user: "gamer6", comment: "Strategy at its best!", rating: 5, date: "March 18, 2025" }
    ],
    comments: []
  },
  {
    id: 5,
    title: "Shadow Strike",
    description: "Stealth and precision define this action game where you take down targets from the shadows.",
    imageUrl: "",
    reviews: [
      { user: "gamer7", comment: "Intense and satisfying.", rating: 4, date: "March 20, 2025" },
      { user: "gamer8", comment: "Could use more missions.", rating: 3, date: "March 21, 2025" }
    ],
    comments: []
  },
  {
    id: 6,
    title: "Legend of the Dragon",
    description: "Embark on a quest to save the kingdom in this fantasy RPG featuring dragons and magic.",
    imageUrl: "",
    reviews: [
      { user: "gamer9", comment: "Immersive storyline and characters.", rating: 5, date: "March 22, 2025" },
      { user: "gamer10", comment: "The graphics are stunning.", rating: 5, date: "March 23, 2025" }
    ],
    comments: []
  },
  {
    id: 7,
    title: "Future Racer",
    description: "Race through futuristic tracks at breakneck speeds in this high-octane racing game.",
    imageUrl: "",
    reviews: [
      { user: "gamer11", comment: "Fast and furious!", rating: 4, date: "March 24, 2025" }
    ],
    comments: []
  },
  {
    id: 8,
    title: "Dungeon Explorer",
    description: "Venture into dark dungeons filled with traps, treasures, and monsters.",
    imageUrl: "",
    reviews: [
      { user: "gamer12", comment: "Really challenging and fun!", rating: 4, date: "March 25, 2025" }
    ],
    comments: []
  },
  {
    id: 9,
    title: "Space Odyssey",
    description: "Embark on an epic journey through space with immersive exploration and combat.",
    imageUrl: "",
    reviews: [
      { user: "gamer13", comment: "A breathtaking adventure.", rating: 5, date: "March 26, 2025" },
      { user: "gamer14", comment: "Could be more polished.", rating: 4, date: "March 27, 2025" }
    ],
    comments: []
  }
];

// List all games
exports.listGames = (req, res) => {
  console.log("DEBUG: Number of games:", games.length); // Should log 9
  res.render("games", { title: "Games", games });
};

// Show a single game's detail page (for now, without recalculating averages)
exports.showGameDetail = (req, res) => {
  const gameId = parseInt(req.params.id, 10);
  const game = games.find(g => g.id === gameId);
  if (!game) {
    return res.status(404).send("Game not found");
  }
  res.render("game", { title: game.title, game });
};

// Expose a getter for the games array (for use in feedback controller, etc.)
exports.__getGames = () => games;
