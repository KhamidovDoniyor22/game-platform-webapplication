// controllers/authController.js

let users = []; // Dummy user store

exports.showSignup = (req, res) => {
  res.render("signup", { title: "Sign Up" });
};

exports.processSignup = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.render("signup", { title: "Sign Up", error: "All fields are required." });
  }
  if (users.find(u => u.username === username)) {
    return res.render("signup", { title: "Sign Up", error: "User already exists." });
  }
  const newUser = { username, password }; // In production, hash your passwords!
  users.push(newUser);
  req.session.user = newUser;
  // Redirect to Games page after signup
  res.redirect("/games");
};

exports.showLogin = (req, res) => {
  res.render("login", { title: "Log In" });
};

exports.processLogin = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.render("login", { title: "Log In", error: "Invalid credentials." });
  }
  req.session.user = user;
  res.redirect("/games");
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
