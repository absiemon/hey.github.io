const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8001;

const db = require('./config/mongoose'); // connecting mongooes

app.use(express.urlencoded());    // The Parser to parse res that has been send by form it is middleware

app.use(cookieParser());  // for reading and writing into the cookies

app.use(express.static('assets'));  // to accessing static files from assets folder


//using express router with the help of the middleware
app.use('/', require('./routes'));  // whether the request comes from home page sends to the routs folder

//------- setting up the view engine-----------------
app.set('view engine', 'ejs');
app.set('views', './views');

//----------------------------------------------------




app.listen(port, (err)=>{
    if(err){
        console.log(`Error connecting to the server: ${err}`);
    }
    console.log(`The server is running on the port: ${port}`);

})