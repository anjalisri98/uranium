const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")


router.post("/createBatch", userController.createBatch)

router.post("/createDeveloper", userController.createDeveloper)

router.get("/eligibleDev", userController.eligibleDev)

router.get("/getDev", userController.getDev)


module.exports = router;