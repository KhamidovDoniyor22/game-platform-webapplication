// routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign Up", hideMainNav: true });
});
router.post("/signup", authController.processSignup);

router.get("/login", (req, res) => {
  res.render("login", { title: "Log In", hideMainNav: true });
});
router.post("/login", authController.processLogin);

router.get("/logout", authController.logout);

module.exports = router;
