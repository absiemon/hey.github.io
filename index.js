const express = require('express');
const app = express();
const port = 8001;

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