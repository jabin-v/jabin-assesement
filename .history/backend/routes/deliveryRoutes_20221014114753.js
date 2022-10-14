const express = require('express')
const router = express.Router()
const deliveryController = require('../controllers/deliveryController')

router.route('/')
    .get(productController.getAllProducts)
    .post(productController.createNewProduct)
    

module.exports = router