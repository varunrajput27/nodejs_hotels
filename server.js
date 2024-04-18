const a=require('express');
const  app=a();
const bodyparser=require('body-parser');
app.use(bodyparser.json()); 
const db=require('./db.js');
const passport =require('passport');
const localstrategy =require('passport-local');
//
 

// middle warefunction
const logRequest=(req,res,next)=>{
console.log=(`[${new Date().toLocaleString()}] request made to :${req.originalUrl}`);
    next();
}
 app.use(logRequest);
 passport.use(new localstrategy(async(username,password,done)=>{
    try{
        cipnst.log('received credentials',username,password);
        const user=await person.findOne({username:username});
        if(!user){
            return done(null,false,{message:'incorrect username'});
        }
        const ismatchpassword=user.password===password? true:false;
        if(ismatchpassword){
            return done(user,done);
        }
        else
        {
            return done(null,false,{message:"incorrect password"});
        }
         
    }
    catch(err){
        return done(err);

    }

 }))
app.get('/',(req,res)=>{
    res.send('welcome to our hotel');
})

// related to person 
const personroutes=require('./routes/personroutes')
app.use('/person',personroutes);




// related to menu
const menuroutes=require('./routes/menuroutes')
app.use('/menu',menuroutes);


app.listen(3000,()=>{
    console.log(" listening on port 3000");
})
