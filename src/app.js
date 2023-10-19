// !        IMPORTED

const express = require('express');
const app = express();
// ! ____________________________________________________________________________________________

// ^    PORT
    // & This line means that where you are hosting the application just host with a available PORT Number if its not available then run application on 3000 PORT.
    const port = process.env.PORT || 3000;
// ^ _____________________________________________________________________________


app.get('/',(req,res)=>{
    res.send("Hello from the Mathew")
});

app.listen(3000);