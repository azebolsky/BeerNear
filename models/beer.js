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
    beerId: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    favoritedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Beer", beerSchema);
