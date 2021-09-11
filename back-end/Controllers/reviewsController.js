const express = require("express");
const reviews = express.Router();



reviews.get("/", async (req, res) => {
    res.json(await getAllReviews())
  });
  
  reviews.get("/:id", async (req, res) => {
      const { id } = req.params;
      res.json(await getReview(id));
  });
  
  reviews.post("/", async (req, res) => {
      res.json(await createReview(req.body));
  }); 
  
  reviews.put("/:id", async (req, res) => {
      const { id } = req.params
      res.json(await updateReview(id, req.body))
  });
  
  reviews.delete("/:id", async (req, res) => {
      const { id } = req.params;
      res.json(await deleteReview(id))
  });