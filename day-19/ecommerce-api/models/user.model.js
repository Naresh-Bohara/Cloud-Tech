const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number,
});

// Virtual Property (Full Name Example) 
UserSchema.virtual("isAdult").get(function () {
  return this.age >= 18;
});

module.exports = mongoose.model("User", UserSchema);
