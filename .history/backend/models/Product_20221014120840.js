const mongoose = require('mongoose');

const productSceme=new mongoose.Schema({
    productName:{
        type:String,
        required: true
    },
    product_id:{
        type:Number,
        required: true
    },
    inStock:{
        type: Boolean,
        default: false,
    }

})


module.exports = mongoose.model('Product', productSceme)