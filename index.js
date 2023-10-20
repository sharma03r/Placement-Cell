const express = require("express");
const app = express();
const port = 8000;

app.listen(port, function (err) {
  if (err) console.log(`Error starting the error ${err}`);
  console.log(`Server running on ${port}`);
});
