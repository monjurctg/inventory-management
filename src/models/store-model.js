const mongoose = require("mongoose");
const {ObjectId} = require("mongoose").Schema.Types;

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a store name"],
      lowercase: true,
      enum: {
        values: ["dhaka", "chattagram", "khulna", "sylhet"],
        message:
          "{VALUE} is not a valid name name must be in dhaka chattagram khulna sylhet",
      },
    },
    description: String,
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    manager: {
      name: String,
      contactNumber: String,
      id: {
        type: ObjectId,
        ref: "User",
      },
    },
  },
  {timestamps: true}
);
