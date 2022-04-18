const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthors" 
    },
    publisher_id:{
        type:ObjectId,
        ref:"newPublishers"
    },
    price: Number,
    ratings: Number,
    isHardCover:{
        type:Boolean,
        default:false
    },


}, { timestamps: true });


module.exports = mongoose.model('newBooks', bookSchema)
