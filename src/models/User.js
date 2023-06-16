const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
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
