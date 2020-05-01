const mongoose = require("mongoose");

//Item schema
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  timeCompl: {
    type: String,
    required: true,
  },
  spaceCompl: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("item", ItemSchema);
module.exports = Item;

/**
 * object = {
 * type: "algorithm"
 * name: 'linked list'
 * timeCompl: 'O(n2)'
 * spaceCompl: 'O(n2)'
 * }
 */

//to store math symbols
//https://www.mathjax.org/
