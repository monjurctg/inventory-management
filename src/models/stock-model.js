const validator = require("validator");
const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const stockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      ref: "Product",
      required: true,
    },
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
    price: {
      type: Number,
      required: true,
      min: [0, "Product must b greater then 0"],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity must b greater then 0"],
    },
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
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be {VALUE}",
      },
    },
    store: {
      name: {
        type: String,
        required: true,
        id: {
          type: ObjectId,
          ref: "Store",
          required: true,
        },
      },
    },
    suppliedBy: {
      name: {
        type: String,
        required: true,
        id: {
          type: ObjectId,
          ref: "User",
          required: true,
        },
      },
    },
  },
  {timestamps: true}
);
stockSchema.pre("save", (next) => {
  console.log("before saving data");
  if (this.quantity == 0) {
    this.status = "out-of-stock";
  }
  next();
});

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;
