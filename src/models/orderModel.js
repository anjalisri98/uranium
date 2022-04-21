
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    // Write the schema content
    user_id:{
        type:ObjectId,
        ref: "userdocument"
    },
    product_id:{
        type:ObjectId,
        ref:"productdocument"
    },
    amount: Number,
    isFreeAppUser:Boolean,
    date:String
    
  
}, { timestamps: true });

module.exports = mongoose.model('orderdocument', orderSchema) 
