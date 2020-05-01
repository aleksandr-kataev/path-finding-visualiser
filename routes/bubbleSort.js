import { Router } from "express";
const router = Router();
import { exec } from "child_process";
import { join } from "path";
const jarPath = join(__dirname, "..", "/java", "test.jar");

/**
 *  @router POST routes/bubbleSort
 *  @desc Post data
 *  @access Public
 */

router.post("/", (req, res) => {
  child = exec(`java -jar ${jarPath} test test`, function (
    error,
    stdout,
    stderr
  ) {
    if (error !== null) {
      res.status(500).json(error);
    }
    res.status(200).json(JSON.parse(stdout));
  });
});

export default router;
