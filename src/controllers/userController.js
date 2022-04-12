const bookModel= require("../models/bookModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }
 const bookUserData = async function (req, res){
    let data = req.body
    let savedData= await bookModel.create(data)
     res.send({ msg: savedData})

 }

 const getBookData = async function (req, res) {
    let allUser= await bookModel.find()
    res.send({msg: allUser})
}
// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.bookUserData=bookUserData
module.exports.getBookData=getBookData