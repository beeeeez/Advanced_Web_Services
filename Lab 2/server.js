var express = require("express");
var handlebars=require("hbs");

var app = express();//express object
handlebars.registerPartials(__dirname+'/views/partials')




app.use(express.static(__dirname+'/public'));//__dirname stores the root dir
app.use(express.urlencoded());

handlebars.registerHelper('today',()=>{
    var date=new Date();
    return date;
});
app.set('view engine', 'hbs');
app.all('/index.html', (req,res)=>{  //get request
    res.render('index.hbs',{title:"HotBod"});

});



app.get('/form', (req,res)=>{  //get request
    res.render('form.hbs');

});


app.listen(3000, ()=>{

    console.log('server is up ');
});

app.all('/about', (req,res)=>{
    res.render('about.hbs')
})

app.all('/result', (req,res)=>{  //get request
    res.render('buddy.hbs', {stuff:req.body.stuff, two:req.body.two, three:req.body.three});

});


app.use('/', (req,res, next)=>{
    res.render('index.hbs',{title:"Godzilla"})
})  