const User = require("../models/User");
// TODO: change bcrypjs to bcrypt in package.json too
const bcrypt = require("bcryptjs");
const jwt = require("../lib/jwt");
const { SECRET_KEY } = require("../config/config");

// Login method
exports.login = async (username, password) => {
  //find user by username
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("User not found");
  }

  // check password is correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Incorrect password");
  }

  //generate token
  const token = await generateToken(user);
  return token
};


// Register method
exports.register = async (userData) => {
  // Check if user exists

  const user = await User.findOne({ username: userData.username });
  if (user) {
    throw new Error("User already exists");
  }
  // Create user
  const createdUser = await User.create(userData);
  const token = await generateToken(createdUser);
  return token;
};


exports.logout = () => {};


// create function to generate token

async function generateToken (user) {
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  }

  const token = await jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  return token;
}