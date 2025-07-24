const express = require('express');
const router = express.Router();
const Menu = require('./Menu');

// POST /menu - Add a new menu item
router.post('/', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newItem = new Menu({ name, price, description });
    await newItem.save();
    res.status(201).json({ message: 'Menu item added', item: newItem });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /menu - Get all menu items
router.get('/', async (req, res) => {
  try {
    const items = await Menu.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
