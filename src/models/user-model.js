const mongoose = require("mongoose");
const validator = require("validator");
const {ObjectId} = mongoose.Schema.Types;

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a brand name"],
      maxLength: 100,
      unique: true,
      lowercase: true,
    },
    imgURL: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },

    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    phone: {
      type: {type: String, required: [true, "Please provide a address"]},
    },
    adress: {type: String, required: [true, "Please provide a address"]},
    products: [
      {
        type: ObjectId,
        ref: "Products",
      },
    ],

    status: {
      type: String,
      enum: ["user", "admin", "manager", "supplier"],
      default: "user",
    },
  },
  {timestamps: true}
);

const User = mongoose.model("User", userSchema);
module.exports = User;
