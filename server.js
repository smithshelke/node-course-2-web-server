const express = require('express');
const hbs = require('hbs');
var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
app.use((req,res,next)=>{

});
hbs.registerHelper('screamIt',(test)=>{
    return test.toUpperCase();
});
app.get('/',(req,res)=>{
    // res.send({
    //   name: 'smith',
    //   likes:['Andrew',
    //         'biking',
    //         'Cities']
    // });
    res.render('home.hbs',{
        pageTitle: 'Welcome',
        currentYear: new Date().getFullYear()
    })
});

app.get('/about',(req,res)=>{

    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});
