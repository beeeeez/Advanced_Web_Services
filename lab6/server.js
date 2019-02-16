var express = require("express");
var hbs = require("hbs");
var mongoose = require("mongoose");
var flubbub = require("./schema/flubbub.js")



var app = express();
app.set("view engine", "hbs");
app.use(express.static(__dirname+ "/public"));
app.use(express.urlencoded({extended:false}));


mongoose.connect('mongodb://localhost:27017/flubbub', {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("connected")
});

function itdoesnthavetobedude(){
    let stringodingo="<table><tbody>";
    flubbub.find(function(err,data){
        if (err) return console.error(err);      
        console.log(data)

        for(let i = 1; i<=data.length; i++){
            stringodingo+="<tr>";
            stringodingo+="<td>"+data[i].firstName+"</td>";
            stringodingo+="<td>"+data[i].lastName+"</td>";
            stringodingo+="<td>"+data[i].department+"</td>";
            stringodingo+="<td>"+data[i].startDate+"</td>";
            stringodingo+="<td>"+data[i].jobTitle+"</td>";
            stringodingo+="<td>"+data[i].salary+"</td>";
            stringodingo+="</tr>";

        }


       
    });
    stringodingo+="</tbody></table>";
    console.log(stringodingo);
    return stringodingo;
    
}




app.post("/results", function(req,res){
    var jimmy = new flubbub({firstName:req.body.fname, lastName:req.body.lname, department:req.body.department, startDate:req.body.date, jobTitle:req.body.job, salary:req.body.salary})

    jimmy.save(function(err, jimmy){
        if (err) return console.error(err);

        
    })
    let mehh = itdoesnthavetobedude();
    res.render('view.hbs',{
        displayMe:mehh
    });
});

app.get("/view", (req,res)=>{

    let mehh = itdoesnthavetobedude();
    res.render('view.hbs',{
        displayMe:mehh
    });
})

app.get("/add", (req,res)=>{
    res.render('thingyding.hbs');
})



app.listen("3000", function(){
console.log("bumbubmbum");
});

