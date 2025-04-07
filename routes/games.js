// routes/games.js
const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");

router.get("/", gamesController.listGames);
router.get("/:id", gamesController.showGameDetail);
router.post("/feedback/game/:id", gamesController.submitFeedback);

module.exports = router;
