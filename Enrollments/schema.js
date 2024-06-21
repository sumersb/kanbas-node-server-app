import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
    user_id: mongoose.Schema.ObjectId,
    course_id: mongoose.Schema.ObjectId,
  },
  { collection: "enrollments" }
);

export default enrollmentSchema;