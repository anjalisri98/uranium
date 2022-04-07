const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const logger = require('../logger/logger.js');
const helper = require('../util/helper.js');
const formatter = require('../validator/formatter.js');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send(logger.welcome());
    
});

router.get('/test-me2',function(req, res){
    let  a = helper.printDate();
    let b = helper.printMonth();
    let c = helper.getBatchInfo();
    let d = a+b+c;
    res.send(d);

});

router.get('/test-me3', function(req, res){
    let a = formatter.exe();
    let b = formatter.changetoLowerCase();
    let c = formatter.changeToUpperCase();
    res.send(a+" " + b + " " + c);
} );

router.get('/hello', function(req, res){
    res.send(logger.lodash());

});
 router.get('/hello2', function(req,res){
     res.send(logger.duplicate());
 });

 router.get('/hello3', function(req,res){
    res.send(logger.odd());
});

router.get('/hello4', function(req,res){
    res.send(logger.pairs());
});




module.exports = router;
// adding this comment for no reason