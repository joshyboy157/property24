const express = require('express');
const router = express.Router();
const Property = require('../models/property');


// gets a list of properties from database
router.get('/properties', function(req,res,next){
    Property.find({}).then(function(property){
        res.send(property);
    });
});


// get a specific property from database
router.get('/properties/:id', function(req,res,next){
    Property.findbyId({_id : req.params.id}).then(function(property){
        res.send(property);
    });
});


// add a property to thedatabase
router.post('/properties', function(req,res,next){
    Property.create(req.body).then(function(property){
        res.send(property);
    }).catch(next);

});

// update a properties in the database
router.put('/properties/:id', function(req,res,next){
    Property.findByIdAndUpdate({ _id : req.params.id},req.body).then(function(){
        Property.findOne({ _id : req.params.id}).then(function(property){
            res.send(property);
        });

    });
});

// delete a properties from database
router.delete('/properties/:id', function(req,res,next){
    Property.findByIdAndRemove({ _id : req.params.id}).then(function(property){
        res.send(property);
    });

});

module.exports = router;