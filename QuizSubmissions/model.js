import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("QuizSubmissionModel", schema, "quizSubmissions");
export default model;