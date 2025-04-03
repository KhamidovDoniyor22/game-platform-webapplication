// routes/games.js
const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");
const authMiddleware = require("../middleware/authMiddleware");

// All game routes require authentication
router.use(authMiddleware.isLoggedIn);

// List all games
router.get("/", gamesController.listGames);

// Game details page (description, reviews, comments, feedback form)
router.get("/:id", gamesController.showGameDetail);

module.exports = router;
