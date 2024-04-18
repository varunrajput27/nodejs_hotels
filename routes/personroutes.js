const express=require('express');
const router=express.Router();
const person=require('./../models/person');
const { findByIdAndUpdate } = require('../models/menu');



// post method related to person
router.post('/',async (req,res)=>{
        try
    {
            const data=req.body;  
        const newPerson=new person(data);  
        
       const response= await newPerson.save();
       console.log('datasaved');
       res.status(200).json(response);
    }
        
    catch(err)
         {
    console.log(err);
    res.status(500).json({error:'internal server error'});
    
        }
    })

// get method related to person
    router.get('/',async (req,res)=>{
        try{
        const data=await person.find();
        console.log('data fetched');
        res.status(200).json(data);
        }
        catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
        }
        })


// parameterized get method related to person
        // router.get('/:work',async(req,res)=>{
        //         try{
        //             const work=req.params.work;
        //         if(work=='chef'||work=='manager'||work=='waiter')
        //         {
        //             const response= await person.find({work:work})
        //             console.log(" data fetched");
        //             res.status(200).json(response);
        //         }
        //         else
        //         {
        //             res.status(404).json({error:"invalid work type"});
        //         }
            
        //         }
        //         catch(err){
        //             console.log(err);
        //             res.status(500).json({error:'internal server error'});
        //      }
        //     })

// put method for person

            router.put('/:id',async (req,res)=>{
                try{
                    const personid= req.params.id;
                    const updataeddata= req.body;
                    const response= await person.findByIdAndUpdate(personid,updataeddata,{
                        new:true,
                        runValidators:true
                    })
                    if(!response){
                        return res.status(404).json({error:'person not found'})
                    }
                    console.log('data updated');
                    res.status(200).json(response);
                    
                }
                catch(err){
                    console.log(err);
                    res.status(500).json({error:'internal server error'})
                }
            })

// delete method for person

router.delete('/:id',async(req,res)=>{
    try{
        const ide=req.params.id;
        const resp= await person.findByIdAndDelete(ide);
        if(!resp)
        {
            return res.status(404).json({error:'person not found'})
        }
        console.log('data deleted');
         res.status(200).json({message:'person data deleted successfully'});

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})

    }
})

            module.exports=router;