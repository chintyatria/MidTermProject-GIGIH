const express = require('express');
const Product = require('../models/product.model');

const router = express.Router();

// GET: Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Create a new product
router.post('/', async (req, res) => {
  const product = new Product({
    productId: req.body.productId,
    linkProduct: req.body.linkProduct,
    title: req.body.title,
    price: req.body.price,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

