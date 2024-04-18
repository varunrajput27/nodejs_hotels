const mongoose=require('mongoose');

//define the mongodb connection url
const mongoURL='mongodb://localhost:27017/hotels' //replace 'mybdatabase with your database'


 //set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 })

//get the default connection
//mongoose maintain a default connection object representing thr mongodb connection
 const db=mongoose.connection;

 //define event listenerd for thr databse connection
 db.on('connected',()=>{
    console.log(" connected to mongodb server");
 })
 db.on('disconnected',()=>{
    console.log("mongodb disconnected");
 })
 db.on('error',()=>{
    console.log(" error in mongodb connection");
 })

 // export the database coneection
 module.exports=db;