const express = require('express');
const port = 3000;
const app = express();

//app.use(express.static(__dirname + '/public'));
app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});

app.get('/', function (req, res) {
  res.send('ok')
}) 
app.get('/test', function (req, res) {
  res.send({status:200, message:"ok"})
}) 
app.get('/time', function (req, res) {
  	
var today = new Date();
var TIME = today.getHours() + ":" + today.getSeconds();
  res.send({status:200, message:TIME})
}) 

// const express = require('express');
// var app = express();
// app.get('/', (req, res) => {
//     res.send('OK')
// });
// app.listen(process.env.PORT || 3000)
