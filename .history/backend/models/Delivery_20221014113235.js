const mongoose = require('mongoose');

const productSceme=new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product'

    }

})


module.exports = mongoose.model('Product', productSceme)