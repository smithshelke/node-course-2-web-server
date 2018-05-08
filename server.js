const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT||3000;
var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
app.use((req,res,next)=>{
    next();
});
hbs.registerHelper('screamIt',(test)=>{
    return test.toUpperCase();
});
app.get('/',(req,res)=>{
    console.log('called');
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
    console.log('about called');
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
})
app.listen(3000,()=>{
    console.log(`Server is up on port ${port}`);
});
