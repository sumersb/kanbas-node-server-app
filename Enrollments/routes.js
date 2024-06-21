import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {

    const findAllEnrollments = async (req, res) => {
        const enrollments = await dao.findAllEnrollments();
        res.json(enrollments);
        return;
    };
    const findStudentEnrollments = async (req, res) => {
        const { studentID } = req.params
        const enrollments = await dao.findStudentEnrollments(studentID);
        res.json(enrollments);
    }

    const enrollStudent = async (req, res) => {
        const currentUser = req.session["currentUser"];
        const courseIds = req.body;
        console.log(courseIds)
        const enrollments = await Promise.all(
            courseIds.map(courseID => dao.createEnrollment({user_id : currentUser._id, course_id : courseID}))
        );
        res.json(enrollments);
    };

    const deleteEnrollment = async (req, res) => {
        const currentUser = req.session["currentUser"];
        const { courseID } = req.params;
        const status = await dao.unenroll(currentUser._id, courseID);
        return res.json(status);
    }
    // const deleteCourse = async (req, res) => {
    //     const { id } = req.params;
    //     const status = await dao.deleteCourse(id);
    //     res.json(status);
    // };
    // const updateCourse = async (req, res) => {
    //     const { id } = req.params;
    //     const status = await dao.updateCourse(id, req.body);
    //     res.json(status);
    // };

    // const findStudentCourses = async(req, res) => {
    //     const { studentID } = req.params;
    //     const courses = await dao.findStudentCourses(studentID);
    //     res.json(courses)
    // }
    app.get("/api/enrollments/:studentID", findStudentEnrollments);
    app.get("/api/enrollments", findAllEnrollments);
    app.post("/api/enrollments", enrollStudent);
    app.delete("/api/enrollments/:courseID", deleteEnrollment);

    // app.post("/api/courses", createCourse);
    // app.delete("/api/courses/:id", deleteCourse);
    // app.put("/api/courses/:id",updateCourse)
}

