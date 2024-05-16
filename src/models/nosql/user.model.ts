import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    require: true
  },
  username: {
    type: String,
    unique: true,
    require: true
  },
  score: {
    type: Number
  }
},
{
  timestamps: true,
  versionKey: false,
})

export default mongoose.model('userModel',UserSchema)