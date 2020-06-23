const mongoose = require("mongoose");

//Item schema
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isWeighted: {
    type: Boolean,
    required: true,
  },
  isShortest: {
    type: Boolean,
    required: true,
  },
});

const Item = mongoose.model("item", ItemSchema);
module.exports = Item;
