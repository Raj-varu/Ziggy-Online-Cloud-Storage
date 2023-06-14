const express = require('express');
const port = 8000;

const app = express();

app.use('/',require('./routes/masterRouter.js'))

app.listen(port,function(err){
    if(err){
        console.log('There is an err',err);
    }
    console.log('Server is up and running on port',port);
});