const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Item schema
const itemSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
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

module.exports = item = mongoose.model('item', itemSchema);

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
