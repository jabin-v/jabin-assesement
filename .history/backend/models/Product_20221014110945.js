const mongoose = require('mongoose');

const productSceme=new mongoose.Schema({
    productName:{
        type:String,
        required: true
    },
    
})


module.exports = mongoose.model('Product', productSceme)