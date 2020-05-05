const Item = require("../models/item");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  Item.find().then((items) => res.status(200).json(items));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    type: req.body.type,
    name: req.body.name,
    timeCompl: req.body.timeCompl,
    spaceCompl: req.body.spaceCompl,
  });
  newItem.save().then((item) => res.status(200).json(item));
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id).then((item) =>
    item
      .remove()
      .then(() => res.status(200).json({ deleted: true }))
      .catch((err) => res.status(404).json({ deleted: false }))
  );
});

module.exports = router;

//add deelte method

//populate the database
//dropdown menu retreive the algorithms
//convert the import statements to es6

//remove the localhost should work without it
//check the package.json for irrelevant packages
//remove the post request? or move it in dev section
//populate and test on heroku
