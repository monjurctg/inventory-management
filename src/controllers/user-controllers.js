const userService = require("../services/user-service");

const userControllers = {};

// create a user

userControllers.createUser = (req, res) => {
  // do someting like db
  let data = req.body;
  try {
    const result = userService.createUser(data);
    res.send(200).json({success: true, data: result});
  } catch (err) {
    throw Error(err);
  }
};

// get all user
userControllers.getALlUser = (req, res) => {
  // do all operation here
  let data = {
    name: "monjur",
  };
  try {
    const result = userService.createUser(data);
    res.send(200).json({success: true, data: result});
  } catch (err) {
    throw Error(err);
  }
};

// exports controller
module.exports = userControllers;
