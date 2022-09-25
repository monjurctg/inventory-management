const mongoose = require("mongoose");
const validator = require("validator");
const {ObjectId} = mongoose.Schema.Types;

const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, "Please provide a brand name"],
      maxLength: 100,
      unique: true,
      lowercase: true,
    },
    description: String,
    email: {
      type: String,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    website: {
      type: String,
      validate: [validator.isURL, "Please prove a valid url"],
    },
    location: String,
    products: [
      {
        type: ObjectId,
        ref: "Products",
      },
    ],
    suppliers: [
      {
        name: String,
        contactNumber: String,
        id: {
          type: ObjectId,
          ref: "User",
        },
      },
    ],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {timestamps: true}
);

const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
