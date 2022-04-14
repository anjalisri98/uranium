const res = require("express/lib/response")
const bookModel= require("../models/bookModel")
const { all } = require("../routes/route")



const createBook = async function (req, res){
    let data= req.body
    let saveData = await bookModel.create(data)
    res.send({msg:saveData})

}

const bookList = async function(req, res){
    let bookList = await bookModel.find().select({bookName : true, authorname : true, _id : 0})

    res.send({msg:bookList})
}
const getBooksInYear = async function(req, res){
    let allUsers= await bookModel.find({}).select({year:2020})
    res.send({msg: allUsers})
}

const getParticularBooks= async function(req, res){
    let data= req.body
    let allUsers = await bookModel.find(data)
    res.send({msg:allUsers})
}


const getXINRBooks= async function(req, res){
let allUsers= await bookModel.find({"price.indianPrice" :{$in : ["100INR" ,"200INR", "500INR"]}}) //or condition
    res.send({msg:allUsers});
}

const getRandomBooks= async function(req, res){
    let allUsers = await bookModel.find({$or: [{stockAvailable:true} , {pages: { $gt : 500 } } ]})
    res.send({msg: allUsers})
 
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks