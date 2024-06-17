import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  module: String
})

const moduleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    course: String,
    lesson: [lessonSchema],
  },
  { collection: "modules" }
);

export default moduleSchema;