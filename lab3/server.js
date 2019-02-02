var express = require("express");
var handlebars = require("hbs");

var app = express();//express object
handlebars.registerPartials(__dirname+'/views/partials')


app.use(express.static(__dirname+'/public'));//__dirname stores the root dir
app.use(express.urlencoded({extended:false}));

handlebars.registerHelper('tableGenerator', (poopy)=>{
    let jimmy="<table><tbody>";
    for(let i = 0; i < poopy; i++){
        jimmy+="<tr>";
        for(let j = 0; j < poopy; j++){
            let blimmy = balloons()
            jimmy+=`<td style="background-color:#`+blimmy+`;">`+blimmy+`<br /><span style="color:white;">`+blimmy+`</span></td>`;
        }
        jimmy+="</tr>";
    }
    jimmy+="</tbody></table>";
    return jimmy;

});
 


 function balloons(){
    var color = ((1<<24)*Math.random()|0).toString(16);
    return color;
 }



app.post('/mubby',(req,res)=> {
    res.render("mubby.hbs",{
     jammy:req.body.blub
    })
});

app.get("/",(req,res)=>{
    res.render('flubby.hbs');
});


app.get("*", (req, res)=>{

    res.render('flubby.hbs');
});

app.listen(3000, ()=>{

    console.log('server is up ');
});