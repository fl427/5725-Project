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

router.get('/echo',function(req,resp){
    console.log("in echo")
    const { spawn } = require('child_process')
    const py=spawn('bash',['./pytest/echo'])
    console.log('finish')
    resp.json("done")
})

app.use('/move',require('./move/move'));
app.use('/image',require('./image/image'));
app.use('/audio',require('./audio/audio'));
