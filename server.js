import { join } from "path";
import express from "express";
const app = express();
const publicPath = join(__dirname, "./client/build");
import { port } from "./config";
import bubbleSort from "./routes/bubbleSort";
import { connect } from "mongoose";
import dbRoute from "./routes/db";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan("dev"));
// Bodyparser Middleware
app.use(bodyParser.json());

app.use("/db", dbRoute);
app.use("/bubbleSort", bubbleSort);

//DB config
import { mongoURI as db } from "./config";

//Connect to db
connect(db)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

//Serve assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(publicPath));
  app.get("*", (req, res) => {
    res.sendFile(join(publicPath, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
