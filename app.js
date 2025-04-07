// app.js
const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Set up sessions
app.use(session({
  secret: "your_secret_key", // change for production!
  resave: false,
  saveUninitialized: false
}));

// Make session available in templates
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// Set view engine and views directory
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Import routes
const authRoutes = require("./routes/auth");
const gamesRoutes = require("./routes/games");
const announcementsRoutes = require("./routes/announcements");
const communitiesRoutes = require("./routes/communities");

// Mount routes
app.use("/", authRoutes);
app.use("/games", gamesRoutes);
app.use("/announcements", announcementsRoutes);
app.use("/communities", communitiesRoutes);

// Home route
app.get("/", (req, res) => {
  res.render("home", { title: "Home", hideMainNav: true });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
