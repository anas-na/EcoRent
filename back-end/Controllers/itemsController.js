const express = require("express");
const items = express.Router();
const {getAllItems, getItem, createItem, deleteItem, updateItem} = require("../queries/items.js")


items.get("/", async (req,res)=>{
    const items = await getAllItems()
})
items.post("/", (req,res)=>{
    
})
items.put("/:id", (req,res)=>{
    
})
items.delete("/:id", (req,res)=>{
    
})

