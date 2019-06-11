const express = require('express');
const port = 3000;
const app = express();


app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});

app.get('/', function (req, res) {
  res.send('<h1>Ok</h1>')
})

// const express = require('express');
// var app = express();
// app.get('/', (req, res) => {
//     res.send('OK')
// });
// app.listen(process.env.PORT || 3000)
