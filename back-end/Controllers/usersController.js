const express = require("express");
const users = express.Router();

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../queries/users.js");

users.get("/", async (req, res) => {
  res.json(await getAllUsers());
});

users.get("/:id", async (req, res) => {
  const  id  = req.params.id;
    res.json(await getUser(id));
});

users.post("/", async (req, res) => {
    res.json(await createUser(req.body));
});

users.put("/:id", async (req, res) => {
    const { id } = req.params;
    res.json(await updateUser(id, req.body))
});

users.delete("/:id", async (req, res) => {
    const { id } = req.params;
    res.json(await deleteUser(id));
});

module.exports = users;
