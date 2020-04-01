const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, './client/build');
const port = require('./config').port;
const bubbleSort = require('./routes/bubbleSort');
const mongoose = require('mongoose');

app.use('/bubbleSort', bubbleSort);

//DB config
const db = require('./config').mongoURI;

//Connect to db
mongoose
  .connect(db)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

//Serve assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(publicPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
