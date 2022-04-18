const express = require('express');
const router = express.Router();
const publisherController= require("../controllers/publisherController")
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")


router.post("/createAuthor", authorController.createAuthor)

router.post("/createPublisher", publisherController.createPublisher)

router.post("/createBook", bookController.createBook)

router.get("/getBooks", bookController.getBooks)

router.put("/updateData/:id", bookController.updateData)

router.put("/updatePrice", bookController.updatePrice)

module.exports = router;