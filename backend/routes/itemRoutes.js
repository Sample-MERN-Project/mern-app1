const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

// GET all items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST add item
router.post("/", async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json(newItem);
});

module.exports = router;

