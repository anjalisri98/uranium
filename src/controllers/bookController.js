const { count } = require("console")
const res = require("express/lib/response")
const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")
const { all } = require("../routes/route")


// assignment solution

const createBook= async function(req, res){
    let data= req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function(req, res){
    let data= req.body
    let savedData = await AuthorModel.create(data)
    res.send({msg: savedData})
}

const allBooks= async function(req, res){
    let authorDetail= await AuthorModel.find( {author_name : "Chetan Bhagat"} )
    let id = authorDetail[0].author_id 
    let booksName = await BookModel.find({ author_id: id}).select({name :1})
    res.send({ msg:booksName})
}

const updateBookPrice = async function(req, res){
    let bookDetail = await BookModel.find({ name:"Two States"})
    let id = bookDetail[0].author_id
    let authorNewName = await AuthorModel.find({author_id : id}).select({ author_name:1 ,_id:0})

    let bkName = bookDetail[0].name
    let updatedPrice = await BookModel.findOneAndUpdate({ name:bkName}, {price:100}, {new: true}).select({price: 1, _id: 0})

    res.send({msg:authorNewName,updatedPrice})
}

const priceBetween = async function(req, res){
    const BooksId = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1}) //array of author_id
    const id = BooksId.map(inp=> inp.author_id)
    console.log(id)

    let temp=[]
    for (let i=0; i<id.length ; i++){
        let x = id[i]
        const author = await AuthorModel.find({ author_id: x}).select({author_name:1, _id:0})
        temp.push(author)

    }
    const authorNM = temp.flat()

    res.send({ msg: authorNM})

        
}
module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.allBooks = allBooks
module.exports.updateBookPrice= updateBookPrice
module.exports.priceBetween=priceBetween
// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks


