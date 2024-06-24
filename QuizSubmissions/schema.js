import mongoose from "mongoose";


const answerSchema = new mongoose.Schema({
  answer: {
    type: String
  },
  question_id: {
    type: mongoose.Schema.ObjectId
  }
})

const quizSubmissionSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.ObjectId
    },
    quiz_id: {
      type: mongoose.Schema.ObjectId
    },
    attempts: {
      type: Number
    },
    score: {
      type: Number,
      default: 0
    },
    taken: {
      type: Date,
      default: Date.now
    },
    answers: [answerSchema]
  },
  { collection: "quizAnswers" }
);
export default quizSubmissionSchema;