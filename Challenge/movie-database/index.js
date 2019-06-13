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

app.get('/movies/read/by-date', function (req, res) {
   movies.sort(function(a,b){
   return  a.year - b.year
   });

  res.send({status:200, data:movies})
  }) ; 


  app.get('/movies/read/by-rating', function (req, res) {
    movies.sort(function(a,b){
      return  b.rating - a.rating});
   res.send({status:200, data:movies})
   }) ; 
   
   app.get('/movies/read/by-title', function (req, res) {
    movies.sort();
   res.send({status:200, data:movies.sort((a,b) => a.title.localeCompare(b.title))});
   }) ; 
 
   app.get('/movies/read/id/:ID', function (req, res) {
    var id = req.params.ID
    for(var i=0; i<=movies.length-1; i++){
    if(id == i+1){
      res.send({status:200, data:movies[i]})
      
    }
    
  }
 
    
    res.send({status:404, error:true, message:'the movie <ID> does not exist'})
    

   }) ; 


   app.get('/movies/add', function (req, res) {
    var a = req.query.title
    var b = req.query.year
    var c = req.query.rating

   if(a == undefined || b == undefined || b.length != 4 || b == isNaN(b)){
    res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
   }
   if(c == undefined || c == ""){
     c = 4;
   }
   movies.push({title : a, year: b, rating : c});
   res.send({data:movies})
   }) ; 
 


app.get('/movies/delete/:ID', function (req, res) {
 
  var id = req.params.ID
    for(var i=0; i<=movies.length-1; i++){
    if(id == i+1){
        movies.splice(i,1);
      
      res.send({status:200, data:movies})
    } 
    
  }  
  
    res.send({status:404, error:true, message:'the movie <ID> does not exist'})
  
  }) ;
      

// app.get('/movies/update/:ID', function (req, res) {
//  var a = req.query.title;
//  var id = req.params.ID;

//  for(var i=0; i<=movies.length-1; i++){
//   if(id == i+1){
      
//     movies[id-1].title =a;
//     res.send({status:200, data:movies})
//   } 
// }
// }) ;
    
app.get('/movies/update/:ID', function (req, res) {
  var a = req.query.title;
  var b = req.query.rating;
  var c = req.query.year;
  var id = req.params.ID;

     if(id>0 && id<=movies.length){
          if(a!=movies[id-1].title && a != undefined){
            movies[id-1].title =a;
          }
          if(b!=movies[id -1].rating && b != undefined){
            movies[id-1].rating =b*1;
          }
        if(c!=movies[id-1].year && c != undefined){
            movies[id-1].year =c*1;
          }
          res.send({status:200, data:movies})
      }
      else  {   res.send({status:404, error:true, message:'the movie <ID> does not exist'})
            }
  

 }) ;
