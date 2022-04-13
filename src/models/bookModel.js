const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
// Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 

const bookSchema = new mongoose.Schema( {
    bookName:{
        type:String,
        required:true
    },
    price:{
        indianPrice: String,
        europePrice: String,
    },
    year:{
        type:String,
        default:2021
    },
    tags:[String],
    authorname:String,
    totalPages: Number,
    stockAvailable:Boolean //true or false
},{ timestamps: true })

module.exports = mongoose.model('getBooks' ,bookSchema ) //getbooks

