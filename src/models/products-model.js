const validator = require("validator");
const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provid a name for this product"],
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: [true, "provide a unit"],
      enum: {
        values: ["kg", "litre", "pcs", "bag"],
        message: "unit value ca;t be {VALUE} must be kg/litre/pcs/bag",
      },
    },
    imageURLs: [
      {
        type: String,
        required: true,
        validate: (values) => {
          if (!Array.isArray(values)) {
            return false;
          }
          let isValid = true;
          values.forEach((url) => {
            if (!validator.isURL(url)) {
              isValid = false;
            }
          });
          return isValid;
        },
        message: "Please provide valid image urls",
      },
    ],
    category: {
      type: String,
      required: true,
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
      },
    },
  },
  {timestamps: true}
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
