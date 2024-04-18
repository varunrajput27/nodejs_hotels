const mongoose=require('mongoose');

//define the person schema
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    }, password:{
        type:Number,
        required:true
    }

})

// define person  model

const person = mongoose.model('person',personSchema);
module.exports=person;

