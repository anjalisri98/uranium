const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook", UserController.createBook)

router.get("/bookList", UserController.bookList)

router.get("/booksInYear", UserController.getBooksInYear)

router.post("/particularBooks", UserController.getParticularBooks)

router.get("/XNIRBooks", UserController.getXINRBooks)

router.get("/randomBooks", UserController.getRandomBooks)

module.exports = router;