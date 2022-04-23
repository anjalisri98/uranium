const express = require('express');
const router = express.Router();
const userController= require("../controllers/assignmentController")
const mid = require("../middleware/commonMiddleware")



router.post("/users", userController.createUser )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", mid.authuser, userController.getUserData)

router.put("/users/:userId", mid.authuser, userController.updateUser)

router.delete("/users/:userId", userController.deleteUser)

module.exports = router;