// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const cron = require("node-cron");
const cookieParser = require("cookie-parser");

const authController = require("./controllers/authController");
const playerController = require("./controllers/playerController");
const userController = require("./controllers/userController")
const gameController = require("./controllers/gameController")

// CONFIGURATION
const app = express();

// cron job to attempt to prevent render from sleeping
// cron.schedule("*/5 * * * *", () => {
//   const currentTime = new Date().toLocaleString("en-US", {
//     timeZone: "America/New_York",
//   });
//   console.log(`Running a task every 5 minutes. Current time: ${currentTime}`);
// });

// MIDDLEWARE change origin to your frontend netlify address for deployment
app.use(
  cors({
    origin: "https://randle-game.netlify.app",
    // origin: "https://main--jwt-auth-10-3.netlify.app/",
    credentials:true
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authController);
app.use("/api/players", playerController)
app.use("/api/users", userController)
app.use("/api/games", gameController)

// ROUTES
app.get("/", (_req, res) => {
  res.send("Welcome to JWT Auth!");
});

// 404 PAGE
app.get("*", (_req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
