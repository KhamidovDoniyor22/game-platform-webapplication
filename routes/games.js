// routes/games.js
const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");

router.get("/", gamesController.listGames);
router.get("/:id", gamesController.showGameDetail);

module.exports = router;
