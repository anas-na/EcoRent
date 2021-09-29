// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const usersController = require("./Controllers/usersController");
const categoriesController = require("./Controllers/categoriesController");
const itemsController = require("./Controllers/itemsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use("/users", usersController);
app.use("/categories", categoriesController);
app.use("/items", itemsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("EcoRent Landing");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!!!")
});



module.exports = app;
