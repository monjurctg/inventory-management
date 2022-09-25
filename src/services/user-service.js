const User = require("../models/user-model");

let userService = {};
userService.createUser = async (data) => {
  const result = await User.create(data);
  return result;
};

userService.getAllUser = async () => {
  const users = await User.find({});
  return users;
};

module.exports = userService;
