// app.js
const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  secret: "your_secret_key",
  resave: false,
  saveUninitialized: false
}));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Import routes
const gamesRoutes = require("./routes/games");
const announcementsRoutes = require("./routes/announcements");
const communitiesRoutes = require("./routes/communities");

app.use("/games", gamesRoutes);
app.use("/announcements", announcementsRoutes);
app.use("/communities", communitiesRoutes);

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the App</h1>
    <p>
      <a href="/games">Games</a> | 
      <a href="/announcements">Events</a> | 
      <a href="/communities">Communities</a>
    </p>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
