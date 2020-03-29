const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, './client/build');
console.log(publicPath);
const port = process.env.PORT || 5000;
const bubbleSort = require('./routes/bubbleSort');

app.use(express.static(publicPath));
app.use('/bubbleSort', bubbleSort);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
