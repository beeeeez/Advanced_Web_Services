var express = require("express");
var handlebars=require("hbs");

var app = express();//express object
handlebars.registerPartials(__dirname+'/views/partials')


app.use(express.static(__dirname+'/public'));//__dirname stores the root dir
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded());

handlebars.registerHelper('today',()=>{
    var date=new Date();
    return date;
});
app.set('view engine', 'hbs');
app.get('/index.html', (req,res)=>{  //get request
    res.render('index.hbs',{title:"HotBod"});

});

app.use('/', (req,res, next)=>{
    res.render('index.hbs'{title:"Godzilla"})
})

app.get('/form', (req,res)=>{  //get request
    res.render('form.hbs');

});


app.listen(3000, ()=>{

    console.log('server is up ');
});


app.post('/buddy', (req,res)=>{  //get request
    res.render('buddy.hbs', {fname:req.body.fname});

});