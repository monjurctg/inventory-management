const userService = require("../services/user-service");

const userControllers = {};

// create a user

userControllers.createUser = async (req, res) => {
  // do someting like db
  let data = req.body;
  try {
    const result = await userService.createUser(data);

    res.status(200).json({success: true, data: result});
  } catch (err) {
    throw Error(err);
  }
};

// get all user
userControllers.getALlUser = async (req, res) => {
  try {
    const result = await userService.getAllUser();
    // console.log(result);

    res.status(200).json({success: true, data: result});
  } catch (err) {
    throw Error(err);
  }
};

// exports controller
module.exports = userControllers;
