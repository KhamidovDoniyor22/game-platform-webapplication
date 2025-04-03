// routes/games.js
const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");

// List all games
router.get("/", gamesController.listGames);

// Show game detail page
router.get("/:id", gamesController.showGameDetail);

module.exports = router;
