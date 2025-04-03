// app.js
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");

const authRoutes = require("./routes/auth");
const gamesRoutes = require("./routes/games");
const feedbackRoutes = require("./routes/feedback");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Sessions (using MemoryStore for simplicity)
app.use(
  session({
    secret: "steam_like_secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Set view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Mount Routes
app.use("/", authRoutes);         // Authentication routes: signup, login, logout
app.use("/games", gamesRoutes);     // Games listing and game details (protected routes)
app.use("/feedback", feedbackRoutes); // Feedback submission (protected route)

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
