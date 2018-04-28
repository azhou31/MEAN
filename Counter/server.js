var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

//app variable
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(bodyParser.urlencoded());
app.use(session({secret:'asl;fjwl;ekrn'}));

//routing
app.get('/',function(req,res){
    if (req.session.counter){
        req.session.counter++;
    }else{
        req.session.counter = 1;
    }
        res.render("index", {counter:req.session.counter});
})
app.post('/add', function(req,res){
    req.session.counter += 1;
    res.redirect("/");
})

app.post("/reset",function(req,res){
    req.session.counter = 0;
    res.redirect("/");
})

app.listen(8000, function(){
    console.log("Running on port 8000");
})