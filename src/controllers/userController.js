const res = require("express/lib/response")
const bookModel= require("../models/bookModel")
const { all } = require("../routes/route")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const createBook = async function (req, res){
    let data= req.body
    let saveData = await bookModel.create(data)
    res.send({msg:saveData})

}

const bookList = async function(req, res){
    let bookList = await bookModel.find().select({bookName : true, authorname : true, _id : 0})
//     let a=[]
//     let b=[]
//     let allUsers= await bookModel.find({})
//     allUsers.forEach(items=>a.push(items.authorname))
//     allUsers.forEach(items=>b.push(items.bookName))
//     var result = a.reduce(function (result, field, index) {
//         result[b[index]] = field;
//         return result;
// }, {})
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
// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks