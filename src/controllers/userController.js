const authorModel = require("../models/developerModel")
const batchModel= require("../models/batchModel")
const mongoose = require('mongoose');
const developerModel = require("../models/developerModel");

const ObjectId = mongoose.Types.ObjectId

const createBatch = async function(req, res){
    let data = req.body
    let batch = await batchModel.create(data)
    res.send({msg: batch})
}

const createDeveloper = async function(req, res){
    let data = req. body
    let developer= await developerModel.create(data)
    res.send({msg:developer})
}


const eligibleDev = async function (req, res) {
      let specificDev = await developerModel.find({percentage :{$gte : 70}, gender :'female'}).populate('batch_id');
         res.send({data: specificDev})
}


const getDev =async function(req, res){
    let value1= req.query.program
    let value2 = req.query.percentage
    let batchId= await batchModel.findOne({name : value1}, {_id:1} )
    let devs = await developerModel.find({percentage : {$gte:value2},batch: batchId._id}).populate('batch_id')

    res.send({data:devs})
}


module.exports.createBatch= createBatch

module.exports.createDeveloper= createDeveloper

module.exports.eligibleDev= eligibleDev

module.exports.getDev = getDev