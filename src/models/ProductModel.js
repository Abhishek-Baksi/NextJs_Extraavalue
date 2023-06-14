const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      require: [true, "Please Enter Product Brand Name"],
    },
    model: {
      type: String,
      require: [true, "Please Enter Product Model Name"],
    },

    minPrice: {
      type: Number,
      require: true,
      min: 0,
    },
    maxPrice: {
      type: Number,
      require: true,
      min: 0,
    },
    image: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.products || mongoose.model("products", productsSchema);

