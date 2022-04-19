const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const batchSchema = new mongoose.Schema( {
    size: Number,
    name: String,
    program: String,

}, { timestamps: true });


module.exports = mongoose.model('batches', batchSchema)
