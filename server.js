//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));

//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/SEO.HTML'));
});
app.get('/PART2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/PART2.HTML'));
});
app.get('/PART3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/PART3.HTML'));
});
app.get('/PART4', function(req, res){
  res.sendFile(path.join(__dirname, 'views/PART4.HTML'));
});
app.get('/BACKLINKS', function(req, res){
  res.sendFile(path.join(__dirname, 'views/BACKLINKS.HTML'));
});
app.get('/SS', function(req, res){
  res.sendFile(path.join(__dirname, 'views/SS.HTML'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});