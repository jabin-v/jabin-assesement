const mongoose = require('mongoose');

const deliverySchema=new mongoose.Schema({
    product_id:{
           type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product'

    }

})


module.exports = mongoose.model('Delivery', deliverySchema)