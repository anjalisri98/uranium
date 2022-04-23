const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  let data = abcd.body;
  let savedData = await userModel.create(data);
  xyz.send({ msg: savedData });
};


const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "anjalisriv023"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
  }catch(error){
    res.send({msg :"error", error: error.message})
  }
};



const getUserData = async function (req, res) {
  try{

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  }catch(error){
    res.send({msg :"error", error: error.message})
  }
};


const updateUser = async function (req, res) {
  let userId =req.params.userId
  let updatedUser = await userModel.findByIdAndUpdate({ _id: userId }, req.body, { new: true });
  res.send({ status: true, data: updatedUser });
}


const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findByIdAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
  res.send({ status: true, data: user })


};
module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser  