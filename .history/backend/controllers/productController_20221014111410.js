const Product = require('../models/Product')
const asyncHandler = require('express-async-handler')

// @desc Get all products 
// @route GET /products
// @access Private
const getAllNotes = asyncHandler(async (req, res) => {
    // Get all products from MongoDB
    const notes = await Product.find().lean()

    // If no products 
    if (!notes?.length) {
        return res.status(400).json({ message: 'No products  found' })
    }

    res.json(notes)
})