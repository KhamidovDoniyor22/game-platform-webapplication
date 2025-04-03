// controllers/authController.js
// In-memory user store for demo purposes
let users = [];

exports.showSignup = (req, res) => {
  res.render("signup", { title: "Sign Up" });
};

exports.processSignup = (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.render("signup", { title: "Sign Up", error: "User already exists" });
  }
  const newUser = { id: Date.now(), username, password }; // NOTE: Hash passwords in production!
  users.push(newUser);
  req.session.user = newUser;
  res.redirect("/");
};

exports.showLogin = (req, res) => {
  res.render("login", { title: "Log In" });
};

exports.processLogin = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.render("login", { title: "Log In", error: "Invalid credentials" });
  }
  req.session.user = user;
  res.redirect("/");
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};
