// routes/feedback.js
const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const authMiddleware = require("../middleware/authMiddleware");

// All feedback routes require authentication
router.use(authMiddleware.isLoggedIn);

// Submit feedback for a specific game (game id passed as URL parameter)
router.post("/game/:id", feedbackController.addFeedback);

module.exports = router;
