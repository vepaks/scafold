const User = require("../models/User");

exports.login = (username, password) => {};

exports.register = async (userData) => {
  const user = await User.findOne({ username: userData.username });
  if (user) {
    throw new Error("User already exists");
  }
  return User.create(userData);
};
exports.logout = () => {};
