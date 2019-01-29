var express = require("express");
var handlebars = require("hbs");

var app = express();//express object
handlebars.registerPartials(__dirname+'/views/partials')


app.use(express.static(__dirname+'/public'));//__dirname stores the root dir
app.use(express.urlencoded({extended:false}));

handlebars.registerHelper('ptag', (poopy, peepee)=>{
    var msg="";
    for(let i = 0; i<poopy; i++){
        msg+=`<p>${peepee}</p>`
    }
    return msg;
});


app.get("/form",(req,res)=>{
    res.render('form.hbs');
});

app.post('/results',(req,res)=> {
    res.render("results.hbs",{
        jammy:req.body.jimmy
    })
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.render('error.hbs', {message:`${error.status} ${error.message}` });
});

app.use((req, res, next)=>{
    const error = new Error('poop');
    error.status=404;
    next(error);
});

app.listen(3000, ()=>{

    console.log('server is up ');
});