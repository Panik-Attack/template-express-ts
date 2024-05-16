import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  id: {
    require: true,
    type: Number,
    unique: true
  },
  question: {
    require: true,
    type: String,
    unique: true
  },
  answers: {
    require: true,
    type: [{
      id: Number,
      answer: String,
      isAnswer: Boolean
    }] ,
    unique: true
  },
},
{
  versionKey: false
}
)

export default mongoose.model('quiz',QuizSchema)