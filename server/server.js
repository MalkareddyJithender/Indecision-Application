const path = require('path');
const express = require('express');
const app = express();
const publicDirPath = path.join(__dirname,'..','public');
const port = 3000 || process.env.PORT;

app.use(express.static(publicDirPath));

app.get('*',(req,res) =>{
    res.sendFile(path.join(publicPath,'index.html'));
    });


app.listen(port,() =>{
    console.log(`server is up `);
});