
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema( {
    // Write the schema content
    name: String,
    category: String,
    price: Number,

  
}, { timestamps: true });

module.exports = mongoose.model('productdocument', productSchema) 
