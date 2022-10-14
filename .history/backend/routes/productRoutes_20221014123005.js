const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.route('/')
    .get(productController.getAllProducts)
    .post(productController.createNewProduct)

router.route('/instock')
    .get(productController.getAllInStock)
    
    

module.exports = router