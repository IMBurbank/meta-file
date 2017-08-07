// node  app entry point


const express = require('express'),
      multer = require('multer');

const app = express(),
      upload = multer();


app.use(express.static('public'));

app.get("/", (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.post("/filedata", upload.single('userFile'), (req, res) => res.json(req.file));


const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
