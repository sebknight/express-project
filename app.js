//set up
const express = require('express');
const path = require('path');
const app = express();

//app is gonna use these
app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url}`);
    next();

});

//look in the public folder for static files (html, css, etc)
app.use(express.static('./public'));
app.use('/bootstrapStyle', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css')));
app.use('/jQuery', express.static(path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js')));



//routes


// app.get('/', (req, res) => res.send('Hello World!'));
//richard does it this way:
// these replace the if statements needed without express
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');

});


// to get an about page for example
// app.get('/about', function(req, res){
//     res.sendFile(__dirname + '/public/about.html')
// });
//this works for post methods
// app.post();

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
    //if port 3000 is having problems, this allows you to change the port, and the log will adapt
    console.log('Server is running on port '+app.get('port'));
    
});