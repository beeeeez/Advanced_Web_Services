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

handlebars.registerHelper('errurboi',()=>{

    let num = floppy(1);
    let plum = 0;
    let jammy=""
    let plammy="";

    for(let i=0; i < num; i++){
        plum = floppy(2);
        if(plum==1){
            plammy="still";
        }
        else if(plum==2){
            plammy="rotate";
        }
        else if(plum==3){
            plammy="shrink";
        }
        jammy+="<div class="+plammy+">Totally Boned</div>"
    }
   return jammy;
});
 


 function balloons(){
    var color = ((1<<24)*Math.random()|0).toString(16);
    return color;
 }

 function floppy(a){
     let bah;
    if (a==1){
         bah=Math.floor(Math.random() * 50) + 20
    }
    else if (a==2){
        bah=Math.floor(Math.random() * 3) + 1
    }
    return bah;
 }



app.post('/mubby',(req,res)=> {
    res.render("mubby.hbs",{
     jammy:req.body.blub
    })
});

app.get("/",(req,res)=>{
    res.render('flubby.hbs');
});

app.get("/flubby",(req,res)=>{
    res.render('flubby.hbs');
});

app.get("*", (req, res)=>{

    res.render('errur.hbs');
});

app.listen(3000, ()=>{

    console.log('server is up ');
});