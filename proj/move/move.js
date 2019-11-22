const express = require('express');
const router= express.Router();

router.get('/fwd',function(req,res){
    const { spawn } = require('child_process')
    const py=spawn('bash',['./bashes/fwd'])
    res.json("fwd")
})

router.get('/back',function(req,res){
    const { spawn } = require('child_process')
    const py=spawn('bash',['./bashes/back'])
    res.json("back")
})

router.get('/left',function(req,res){
    const { spawn } = require('child_process')
    const py=spawn('bash',['./bashes/left'])
    res.json("left")
})

router.get('/right',function(req,res){
    const { spawn } = require('child_process')
    const py=spawn('bash',['./bashes/right'])
    res.json("right")
})

router.get('/stop',function(req,res){
    const { spawn } = require('child_process')
    const py=spawn('bash',['./bashes/stop'])
    res.json("stop")
})

router.get('/setStart',function(req,res){
    const { spawn } = require('child_process')
    const py=spawn('bash',['./bashes/set'])
    res.json("setStart")
})

router.get('/return',function(req,res){
    const { spawn } = require('child_process')
    const py=spawn('bash',['./bashes/return'])
    res.json("return")
})

module.exports=router;