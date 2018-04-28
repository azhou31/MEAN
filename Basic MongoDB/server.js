var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true}));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User')

//Routes
app.get('/', function(req,res){
    res.render('index');
})
//Add User Request
app.post('/users', function(req,res){
    var user = new User ({name: req.body.name, age: req.body.age});
    user.save(function(err){
        if(err){
            console.log('Something went wrong');
        }else{
            console.log('Successfully added a user!');
            res.redirect('/');
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})