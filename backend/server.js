const express = require('express');
const cors=require('cors')
const dbConnection =require("./dataBase/db")
const app = express();
const port = 8089
const authUser = require('./routers/userAuthRouter')


app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json())


app.use("/question",require("./routers/questionRouter"));
app.use("/user",authUser);



app.listen(port, () => {
    console.log(`http://localhost:${port}!`)
    dbConnection()
})