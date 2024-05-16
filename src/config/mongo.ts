import mongoose from "mongoose";

export const dbConnect = async () => {
  
const DB_URI = process.env.DB_URI
  try{
    await mongoose.connect(DB_URI!)
    console.log('Conected')
  } 
  catch (error){
    console.log('Error connecting to MongoDB')
  }
};

