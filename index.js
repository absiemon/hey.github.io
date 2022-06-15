const express = require('express');
const app = express();
const port = 8001;

app.listen(port, (err)=>{
    if(err){
        console.log(`Error connecting to the server: ${err}`);
    }
    console.log(`The server is running on the port: ${port}`);

})