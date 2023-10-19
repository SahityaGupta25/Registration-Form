    // !        IMPORTED_________________________________________________
const mongoose = require('mongoose');
// ! ____________________________________________________________________________________________

mongoose.connect("mongodb://localhost:27017/youtuberegistration",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
}).then(()=>{
    console.log(`Connection Successful`);
}).catch((e)=>{
    console.log(`No Connection`);
})