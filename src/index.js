const express = require('express');
const app = express();
const localPort = "3000";
const pcServer = '192.168.1.133';

const path = require('path');

//settings
app.set('port', process.env.PORT || localPort);

//midelwares

//routes

//staticfiles
app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req, res)=>{
    res.redirect('index.html');
});

//server
app.listen(app.get('port'), ()=>{
    console.log('server on port'+ app.get('port'));
});
