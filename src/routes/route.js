const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/bookUserData" , UserController.bookUserData)

router.get("/getBookData", UserController.getBookData)

module.exports = router;