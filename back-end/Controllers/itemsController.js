const express = require("express");
const items = express.Router();
const {getAllItems, getItem, createItem, deleteItem, updateItem} = require("../queries/items.js")


items.get("/", async (req,res)=>{
    const items = await getAllItems()
    console.log("RESPONSEEEE!!!", items);
    res.json({success: true, payload: items});
})
items.post("/", (req,res)=>{
    
})
items.put("/:id", (req,res)=>{
    
})
items.delete("/:id", (req,res)=>{
    
})

module.exports = items