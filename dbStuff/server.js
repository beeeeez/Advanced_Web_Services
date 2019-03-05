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

/*
var blammo = new butter({ buttCount: 0.5, isItLarry: 0, toeCount: 17, name:"Jim Bob"});
blammo.save(function (err, butter){
    if (err) return console.error(err);
    console.log(butter)
})*/


function parsethedata(doc){
let stringy="<table><tbody>";
    console.log(doc);
    for(let i =0; i < doc.length; i++){
        stringy+="<tr>"
        stringy+="<td>"+doc[i].fname+"<td>";
        stringy+="<td>"+doc[i].lname+"<td>";
        stringy+="<td>"+doc[i].dept+"<td>";
        stringy+="<td>"+doc[i].date+"<td>";
        stringy+="<td>"+doc[i].title+"<td>";
        stringy+="<td>"+doc[i].salary+"<td>";
        stringy+='<td><a href="update?id='+doc[i].id+'">Update</a><td>';
        stringy+='<td><a href="delete?id='+doc[i].id+'">Delete</a><td>';
        stringy+="</tr>"
    }
    stringy+="</tbody></table>";
    return stringy;
}

app.get("/", function(req,res){
    var jimmy = butter.find();
    jimmy.then(function (doc){
        let stringydingy = parsethedata(doc);
        res.render('view.hbs', {            
            thedata:stringydingy
        })
    })
});

app.get("/view", (req,res)=>{
    var jimmy = butter.find();
    jimmy.then(function (doc){
        let stringydingy = parsethedata(doc);
        res.render('view.hbs', {            
            thedata:stringydingy
        })
    })
})



app.post("/results", (req,res)=>{
    var shammy = new butter({ fname:req.body.fname,lname:req.body.lname, dept:req.body.dept, date:req.body.date,title:req.body.title,salary:req.body.salary });
    var lammy = shammy.save(function (err, butter){
        if (err) return console.error(err);
        console.log(butter);
    })

    var jimmy = butter.find();
    setInterval(function (){
    jimmy.then(function (doc){
        let stringydingy = parsethedata(doc);
        res.render('view.hbs', {            
            thedata:stringydingy
        })
    });
    },1000);
});

app.post("/updateButter", (req,res)=>{
    var shammy = butter.findByIdAndUpdate(req.body.id,{ $set: { fname:req.body.fname, lname:req.body.lname, dept:req.body.dept, date:req.body.date,title:req.body.title,salary:req.body.salary  }});
    shammy.then(function (doc){
        var jimmy = butter.find();
    jimmy.then(function (doc){
                let stringydingy = parsethedata(doc);
        res.render('view.hbs', {            
            thedata:stringydingy
        })
        });    
    });
});




app.get("/update",(req,res)=>{
    var _id=req.query.id;
    console.log(_id);
    var jimmy = butter.findById({_id}).exec(function (err, butter){
        console.log(butter);
        res.render('update.hbs', {          
            id:butter.id,
            fname:butter.fname,
            lname:butter.lname,
            dept:butter.dept,
            date:butter.date,
            title:butter.title,
            salary:butter.salary
        })
    });

})

app.get("/delete",(req,res)=>{

    var _id=req.query.id;
    let boobies = butter.findByIdAndDelete(_id);
    boobies.then(function (doc){
        var jimmy = butter.find();
        jimmy.then(function (doc){
                    let stringydingy = parsethedata(doc);
            res.render('view.hbs', {            
                thedata:stringydingy
            })
            });    

    })
});


app.listen("3000", function(){
console.log("bumbubmbum");
});



