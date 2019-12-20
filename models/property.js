const mongoose = require('mongoose');
const Schema = mongoose.Schema;






// create schema

const PropertySchema = new Schema({
    name:{
        type:String,
        required: [true,'Name is required']
    },

});

const Property= mongoose.model('property', PropertySchema);

module.exports = Property;