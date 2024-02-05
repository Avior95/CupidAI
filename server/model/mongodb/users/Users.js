const mongoose = require("mongoose");
const Name = require("./Name");
const Image = require("./Image");
const {
  DEFAULT_STRING_SCHEMA_REQUIRED,
} = require("./helpers/mongooseValidation");

const schema = new mongoose.Schema({
  name: Name,
  gender: DEFAULT_STRING_SCHEMA_REQUIRED,
  description: DEFAULT_STRING_SCHEMA_REQUIRED,

  email: {
    type: String,
    require: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    match: RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    ),
  },
  image: Image,
  // isAdmin: { type: Boolean, default: false },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const User = mongoose.model("users", schema);

module.exports = User;
