const { default: mongoose } = require("mongoose");
const Question =require('../dataBase/questionSchema')


mongoose.connect('mongodb+srv://shalu1998stackup:961417103094@cluster0.n3ieief.mongodb.net/Machine-task4')

    if(db){
     console.log('sucess connection');
    }else{
     console.log('error Connection');
    }
 
 

 
const seedData =[
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Rome"],
        correctAnswer: 0,
      },
];

const seedDb = async ()=>{
    await Question.deleteMany({});
    await Question.insertMany(seedData);
};

seedDb().then(() => {
    mongoose.connection.close();
});

 