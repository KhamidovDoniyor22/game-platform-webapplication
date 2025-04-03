// routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Signup
router.get("/signup", authController.showSignup);
router.post("/signup", authController.processSignup);

// Login
router.get("/login", authController.showLogin);
router.post("/login", authController.processLogin);

// Logout
router.get("/logout", authController.logout);

router.get("/", (req, res) => {
  if (req.session.user) {
    // Show the main page or redirect to /games
    return res.redirect("/games");
  }
  // If not logged in, go to /login
  res.redirect("/games");
});



module.exports = router;
