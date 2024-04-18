const mongoose=require('mongoose');

//define the person schema
const menuSchema=new mongoose.Schema({
    veg:{
        type:String,
        enum:['cholebhature','purisabji','makhnidaal'],
        required:true
    },
    nonveg:{
        type:String,
        enum:['butterchicken','tandoorichicken','nonvegbiryani'],
        required:true
        
    },
    drink:{
        type:Boolean,
        deafault:false,
       required:true
    },
   desert:{
        type:String,
        enum:['rasgulla','kajukatli'],
        required:true
    },
    
})

// define person  model

const menu = mongoose.model('menu',menuSchema);
module.exports=menu;

