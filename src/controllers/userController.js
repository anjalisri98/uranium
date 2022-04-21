const req = require("express/lib/request")
const UserModel= require("../models/userModel")
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")
const userModel = require("../models/userModel")
const res = require("express/lib/response")





const createProduct = async function(req, res){
    let data = req.body
    let productdocument = await productModel.create(data)
    res.send({msg: productdocument})
}

const createUser = async function (req,res){
    let requestBody= req.body
    let headers= req.headers    
    let appType = headers["isFreeAppUser"]
    if(!appType){
        let appType = headers["isfreeappuser"]
        if(!appType){
            res.send({status:false, msg:"A mandatory header is missing"})
        }
    }
    let userdoc = await userModel.create(requestBody)
    res.send({status: true, data: userdoc})
}



const createOrder = async function (req, res){
    let orderDetails= req.body
    let headers= req.headers    
    let appType = headers["isFreeAppUser"]
    if(!appType){
        let appType = headers["isfreeappuser"]
    }
    if(!appType){
        return res.send({ status: false, msg: "A mandatory header is missing"})
    }
    let userId = orderDetails.user_id
    let user = await userModel.findById(userId)
    if(!user){
        return res.send({status: false,msg:" user does'nt exists"})
    }
    let productId = orderDetails.product_id
    let product = await productModel.findById(productId)
    if(!product){
        return res.send({ status: false, msg: "product doesnt exists"})
    }
    // let appType = Boolean(aapType) //this works on the truthy/falsy value
     if(appType == 'true'){
         let appTypeFree = true
     }else {
         let appTypeFree = false
     }

     //Scenario 1
     if(!appTtypeFree && user.balance>= product.price){
         user.balance = user.balanace - product.price
         await user.save()

        orderDetails.amount = product.price
        orderDetails.isFreeAppUser = false 
        
        let orderCreated = await orderModel.create(orderDetails)
        return res.send({status: true, data: orderCreated})
     } else if(!appTypeFree){
         //scenario 2
         return res.send({ status: false, msg : " User does not have sufficient balance"})

     }else {
         orderDetails.amount = 0
         orderDetails.isFreeAppUser= true 
         let orderCreated = await orderModel.create(orderDetails)
         res.send({ status: true, data: orderCreated})
     }
}

module.exports.createProduct = createProduct
module.exports.createUser = createUser
module.exports.createOrder= createOrder  

// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)
//     //counter
//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
    
//     }

    // //Printing all the headers before modification - addition of a new header called 'month'
    // console.log('Request headers are before: ', headers)

    // //Accessing a request header called 'batch'
    // let batchHeader = headers["batch"] // headers.batch 
    
    // ///Accessing a request header called 'content-type'
    // let contentHeader = headers['content-type'] // headers.content-type

    // console.log('Content Type hedser is: ',contentHeader)
    // console.log('Batch header is: ', batchHeader)

    // //Adding a new requets header
    // req.headers["month"] = 'April' //req.headers.month = 'April' or req.headers["month"] = 'April'


    // //Printing the headers after modification - addition of a new header called 'month'
    // console.log('Request headers are after: ', headers)


    // console.log('Request property called current-day', req['current-day'])
    
    // //Adding a response header
    // res.header('year', '2022')

    // res.send('Just create a user')
// }

// module.exports.createAUser = createAUser
//  module.exports.basicCode = basicCode

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode















