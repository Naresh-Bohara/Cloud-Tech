const mongoose = require("mongoose");

const dbConnect = async()=>{
   try{
    await mongoose.connect(process.env.MONGODB_URL, {
        dbName: process.env.MONGODB_NAME,
        autoCreate: true,
        autoIndex: true
    })
    console.log(`successfuly connected to the database: ${process.env.MONGODB_NAME}`);
   }catch(err){
    console.log("Error establishing db connection", err.message)
    process.exit(1);
   }
}
 
dbConnect();