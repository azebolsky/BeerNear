const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    abv: {
      type: Number,
      required: true,
    },
    brewery: {
      type: String,
      required: true,
    },
    beerId: {
      type: String,
      required: true,
    },
    favoritedBy: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Beer", beerSchema);
