const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const mongoose = require('mongoose');
const publisherModel = require("../models/publisherModel");
const ObjectId = mongoose.Types.ObjectId

const createBook= async function (req, res) {
    let data = req.body

    if(!data.author_id){
        res.send(" author_id is required")
    }else if (!ObjectId.isValid(data.author_id)){
        res.send("Given author_id is not valid")
    } else if (!data.publisher_id){
        res.send("publisher_id  is required")
    } else if(!ObjectId.isValid(data.publisher_id)){
        res.send("Given publisher_id is not valid")
    }else {
        let saveData = await bookModel.create(data)
    res.send({data: saveData})
    }
    
}

const getBooks = async function (req, res) {
      let specificBook = await bookModel.find().populate(['author_id' , 'publisher_id'])  //we can also write as ('author_id publisher_id')
         res.send({data: specificBook})
}


const updateData =async function(req, res){
    let data = req.body
    let id = req.params.id
    // let updatedData = await bookModel.findOneAndUpdate({publisher_id:id}, data , {new:true} )
    let updatedData = await bookModel.updateMany(
        {publisher_id:id}, //condition
        {$set:data}, //updation
        {new:true}
        )
       
    res.send({data: updatedData})
}

const updatePrice= async function(req, res){
    let pricematch = await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    console.log(pricematch)
    let pricearray=[]
    for (let i=0; i<pricematch.length; i++){
        let ObjtId=pricematch[i]._id
        pricearray.push(ObjtId)
    }
    let updateprice= await bookModel.updateMany({author_id:{$in:pricearray}},{$inc:{price:10}},{new:true})
    res.send({data: updateprice})
}


module.exports.createBook= createBook

module.exports.getBooks= getBooks

module.exports.updateData= updateData

module.exports.updatePrice = updatePrice