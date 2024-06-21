import model from "./model.js";
export const createEnrollment = (enrollment) => {
    delete enrollment._id;
    console.log(enrollment);
    return model.create(enrollment);
};
export const findAllEnrollments = () => model.find();
export const findStudentEnrollments = (id) => model.find({user_id: id});
export const unenroll = (uid, cid) => model.deleteOne({ user_id: uid, course_id: cid });
// export const findStudentCourses = (studentID) => model.find({user: studentID});
// export const updateCourse = (courseID, course) => model.updateOne({ _id: courseID }, { $set: course });