const mongoose = require("mongoose")



const dbConnection = async () =>{

   const db = await mongoose.connect('mongodb+srv://shalu1998stackup:961417103094@cluster0.n3ieief.mongodb.net/Machine-task4')
   if(db){
    console.log('sucess connection');
   }else{
    console.log('error Connection');
   }

}



module.exports = dbConnection