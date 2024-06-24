import mongoose from "mongoose";


const questionSchema = new mongoose.Schema({
  title: {
    type: String
  },
  type: {
    type: String,
    enum: ["multiple_choice","true_false", "fill_in_blank"],
    default: "multiple_choice"
  },
  question: {
    type: String
  },
  points: Number,
  choices: [String],
  answers: [String]
})

const quizSchema = new mongoose.Schema({
    title: {
      type: String
    },
    course_id: String,
    type: {
      type: String,
      enum: ["PRACTICE QUIZ", "GRADED SURVEY", "UNGRADED SURVEY", "GRADED QUIZ"],
      default: "GRADED QUIZ",
    },
    instructions: String,

    points: Number,

    published: Boolean,

    assignment_group: {
      type: String,
      enum: ["EXAMS", "ASSIGNMENTS", "PROJECT", "QUIZZES"],
      default: "QUIZZES",
    },
    shuffle_answers: {
      type: Boolean,
      default: true
    },
    has_time_limit: {
      type:Boolean,
      default: false
    },
    time_limit: Number,
    multiple_attempts: {
      type: Boolean,
      default: false
    },
    num_attempts: {
      type: Number,
      default: 1
    },
    show_answers: Boolean,
    access_code: String,
    one_question_view: {
      type: Boolean,
      default: true
    },
    webcam: Boolean,
    lock_questions: {
      type: Boolean,
      default: false
    },
    assign: String,
    due: Date,
    available: Date,
    until: Date,
    questions: [questionSchema]
  },
  { collection: "quizzes" }
);
export default quizSchema;