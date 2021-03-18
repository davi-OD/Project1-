//Dependencies
const express = require('express');

//Imstantiations
const app = express();

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');
//Middleware
app.use('/static', express.static('public')); //for static pages
app.use(express.static('public'));
app.use(express.static('files'));
//Routes
app.get('/', (req, res) => res.send('Hello World!'));

//app.post('login', (req,res) => res.send('login received'));


//Bootstrapping Server
app.listen(3000, () => console.log('Example app listening on port 3000!'));