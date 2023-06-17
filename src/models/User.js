const mongoose = require("mongoose");
// Linux OS using MongoDB 4.0 and bcryptjs 2.0
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
});
userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new Error("Passwords do not match");
  }
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
