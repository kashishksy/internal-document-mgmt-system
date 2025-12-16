import express from 'express'    // Importing the Express framework for creating the server
import mongoose from 'mongoose'    // Importing Mongoose for MongoDB connection and schema handling
import dotenv from 'dotenv'  


const app = express()
//interceptor
app.use(express.json());

//how to access .env file stuff
dotenv.config()

const PORT = process.env.PORT || 8000;

const mongoURL = process.env.MONGO_URL

//use mongoose to connect to the server, if it resolves, log something to the console adn start server or go to error block
mongoose.connect(mongoURL).then(() => {

    console.log('connection is successful :)')

    console.log(`Server is running locally at: http://localhost:${PORT}`);
  
    app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`)
    })
}).catch((error) => {
    console.log(error)

})