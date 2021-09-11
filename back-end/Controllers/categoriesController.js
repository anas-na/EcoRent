const express = require("express");
const categories = express.Router();
const {
    getAllCategories,
    getCategory
} = require("../queries/categories");

categories.get("/", async (req, res) => {
    res.json(await getAllCategories());
});

categories.get("/:id", async (req, res) => {
    res.json(await getCategory());
});

module.exports = categories;

