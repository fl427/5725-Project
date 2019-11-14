const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 8080;        // 设置端口

var router = express.Router(); 

app.listen(port,function () {
    console.log("server started at port: "+port)
})

app.use('/',router);
router.get('/connect',function(req,res){
    res.json("server connected");
})
