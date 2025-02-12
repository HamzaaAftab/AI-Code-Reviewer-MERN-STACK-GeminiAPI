// using dotenv to enable .env variables
require('dotenv').config();

// importing app from app.js to run a server
const app = require('./src/app');

//Defining Port
const PORT = 3000;

//Running the Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
