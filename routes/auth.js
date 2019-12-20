const router = require('express').Router();


//signup 
//this might be a post request?? still learning passport
router.get('/signup',function(req,res){
    console.log("test1");
});

//login
router.get('/login',function(req,res){
    console.log("test2");
});

//log out
router.get('/logout',function(req,res){
    console.log("test3");
});


//google auth
router.get('/google',function(req,res){
    console.log("test4");
});


//facebook auth
router.get('/facebook',function(req,res){
    console.log("test5");
});

module.exports = router;