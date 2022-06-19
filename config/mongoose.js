// getting-started.js
const mongoose = require('mongoose');

// if not connected to mongoDb then show the error
main().catch(err => console.log(err));

// if sucessfully connected to the database then
main().then(() => {
    console.log('sucessfully connnected to the database');

})
 // setting up a connection
async function main() {
  
  await mongoose.connect('mongodb://localhost:27017/hey-development');
} 