const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
let authuser = function (req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) {
      token = req.headers["x-auth-token"];
    }

    //If no token is present in the request header return error
    if (!token) {
      return res.status(401).send({ status: false, msg: "token must be present" });
    }

    let decodedToken = jwt.verify(token, "anjalisriv023");
    if (!decodedToken) {
      return res.status(403).send({ status: false, msg: "token is invalid" });
    }

    let modifiedUserId = req.params.userId;
    let userloggedIn = decodedToken.userId
    if (modifiedUserId != userloggedIn) {
      res.status(403).send({ status: false, msg: " user Id does not match" })
    }
    next()

  } catch (error) {
    res.send({ msg: "error", error: error.message })
  }
}


//Return an error if no user with the given id exists in the db






module.exports.authuser = authuser