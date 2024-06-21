import model from "./model.js";
export const createCourse = (course) => {
    if (!course.number) {
        // Generate a random number (for example, between 1000 and 9999)
        course.number = Math.floor(1000 + Math.random() * 9000);
    }
    delete course._id;
    return model.create(course);
}
export const findAllCourses = () => model.find();
export const findCourse = (courseID) => model.find({ _id: courseID });
export const updateCourse = (courseID, course) => model.updateOne({ _id: courseID }, { $set: course });
export const deleteCourse = (courseID) => model.deleteOne({ _id: courseID });