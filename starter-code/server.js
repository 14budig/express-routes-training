// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.use(express.static('public'));

// Gallery View Route


// The Number Guessing Game
var number = 5;
app.get('/guess', function(req, res){
  var num = req.query.number;
  if(num == number){
    res.send("You got it!");
  }
  else if(num > number){
    res.send("Too high!");
  }
  else if(num < number){
    res.send("Too low!");
  }
});


app.post("/change", function(req, res){
  number = req.query.number;
  res.send("Number changed to " + number);
})

// Gallery
var artworks = [
  {
  title: 'picture',
  artist: 'painter guy',
  description: "It's a freaking painting"
  },{
  title: "Another picture",
  artist: "Some Dude",
  description: "I don't know, something"
  },{
  title: "Starry Night",
  artist: "Vincent Van Gogh",
  description: "Wow, this one's actually real, and good."
  }
];
app.get('/art-gallery', function(req, res){
  res.sendFile('views/art-gallery.html' , { root : __dirname});
});

app.get('/api/art', function(req, res){
  res.json(artworks);
});

app.post('/art-gallery/add', function(req, res){

  artworks.push({
    title: req.body.title,
    artist: req.body.artist,
    description: req.body.desc
  });
  res.json(artworks);
});


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
