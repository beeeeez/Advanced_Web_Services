var express =require("express");
var hbs = require("hbs");
var mongoose = require("mongoose");
var hello = require("./exports/hello.js");
var butter = require("./schemas/butter.js")



var app = express();
app.set("view engine", "hbs");
app.use(express.static(__dirname+ "/public"));
hbs.registerPartials(__dirname + "views/partials");
app.use(express.urlencoded({extended:false}));


mongoose.connect('mongodb://localhost:27017/Butter', {useNewUrlParser: true});
hello.hello();
hello.goodbye();


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("connected")
});

var blammo = new butter({ buttCount: 0.5, isItLarry: 0, toeCount: 17, name:"Jim Bob"});
blammo.save(function (err, butter){
    if (err) return console.error(err);
    console.log(butter)
})

app.get("/", function(req,res){
    butter.update({isItLarry:0}, function(Err, data){
        if (err) return console.error(err);
        console.log(data);
    })
});

app.get("/view", (req,res)=>{
    res.render('view.hbs');
})


app.listen("3000", function(){
console.log("bumbubmbum");
});



