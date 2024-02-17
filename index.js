const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const bestPlaces = require("./data/bestplaces");
const nearbyPlaces = require("./data/nearby");
const restaurant = require("./data/restaurant");
const restaurants2 = require("./data/restaurants2");
const suggestions = require("./data/suggestions");
const home = require("./data/home");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send(home);
});

app.get("/bestPlaces", (req, res) => {
  res.status(200).send(bestPlaces);
});

app.get("/nearbyPlaces", (req, res) => {
  res.status(200).send(nearbyPlaces);
});

app.get("/restaurant", (req, res) => {
  res.status(200).send(restaurant);
});

app.get("/restaurants2", (req, res) => {
  res.status(200).send(restaurants2);
});

app.get("/suggestions", (req, res) => {
  res.status(200).send(suggestions);
});

const port = process.env.PORT || 9001;

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`Server running at: ${url}`);
});
