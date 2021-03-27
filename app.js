const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

//IMPORTING MONGOOSE
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
mongoose.connect('mongodb://localhost/subskribed', {useNewUrlParser: true, useUnifiedTopology: true});

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())


// PUG SPECIFIC STUFF
app.set('view engine', 'ejs') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
