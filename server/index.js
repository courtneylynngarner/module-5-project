const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require("./controller");

// compliment

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

// fortune

app.get("/api/a-fortune", (req, res) => {
  let randomIndexFortunesOpt = Math.floor(Math.random() * fortunesOpt.length);
  let randomFtIndex = fortunesOpt[randomIndexFortunesOpt];

  res.status(200).send(randomFtIndex);
});

app.listen(4000, () => console.log("Server running on 4000"));

// daily inspiration

app.get("/api/daily-inspiration", (req, res) => {
  let randomIndexInspo = Math.floor(Math.random() * dailyInspo.length);
  let randomInspIndex = dailyInspo[randomIndexInspo];

  res.status(200).send(randomInspIndex);
});

// mindfulness tips

app.get("/api/mindfulness-tips", (req, res) => {
  let randomMind = Math.floor(Math.random() * mindfulTips.length);
  let randomMindIndex = mindfulTips[randomMind];

  res.status(200).send(randomMindIndex);
});
