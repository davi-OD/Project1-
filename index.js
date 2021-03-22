//Dependencies
const express = require('express');

//Instantiations
const app = express();

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//Middleware
app.use('/static', express.static('public')); //for static pages


//Routes
//app.get('/', (req, res) => 

app.get('/', (req,res) => res.send('Welcome'));

app.get('/newEmployee', (req, res) => 
    res.render('newEmployee'));




//Bootstrapping Server
app.listen(3000, () => console.log('Example app listening on port 3000!'));