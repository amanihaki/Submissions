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

app.get('/hello/:ID', function (req, res) {
     var id = req.params.ID
  res.send({status:200, message:"Hello" + id})
}) ;


app.get('/search', function (req, res) {
  var search = req.query.s
  if(search !== undefined && search !== ""){
    res.send({status:200, message:"ok", data:search})
    
  }
else{
  
  res.send({status:500, error:true, message:"you have to provide a search"})
  }
})
 


const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]




app.get('/movies/creat', function (req, res) {
  
res.send({status:200, data:MOVIES})
}) ;


app.get('/movies/read', function (req, res) {
 
res.send({status:200, data:movies})
}) ;


app.get('/movies/update', function (req, res) {
 
res.send({Anthing})
}) ;
