const express = require('express');
const router = express.Router();
const exec = require('child_process').exec;
const path = require('path');
const jarPath = path.join(__dirname, '..', 'test.jar');

/**
 *  @router POST routes/bubbleSort
 *  @desc Post data
 *  @access Public
 */

router.post('/', (req, res) => {
  child = exec(`java -jar ${jarPath} test test`, function(
    error,
    stdout,
    stderr,
  ) {
    res.status(200).json(JSON.parse(stdout));
    if (error !== null) {
      res.status(500).json(error);
    }
  });
});

module.exports = router;
