const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema( {
    // Write the schema content
    name: String,
    balance:{
        type:Number,
        default:100
    },
    address: String,
    gender:{
        type: String,
        enum: ["male", "female", "other"]
    },
    isFreeAppUser :{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model('userdocument', userSchema) 
