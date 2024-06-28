import * as dao from "./dao.js";
import { findStudentEnrollments, createEnrollment } from "../Enrollments/dao.js";
import { ObjectId } from "mongodb";
export default function CourseRoutes(app) {

    const findAllCourses = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            const courses = await dao.findAllCourses();
            res.json(courses);
            return;
        }
        const id = currentUser._id;
        const enrollments = await findStudentEnrollments(id);
        const courseIDs = enrollments.map((e) => e.course_id);
        const courses = await dao.findCourse({ $in: courseIDs });
        res.json(courses);
        return;
    };

    const findNewClasses = async (req, res) => {
        const currentUser = req.session["currentUser"];
        const id = currentUser._id;
        const enrollments = await findStudentEnrollments(id);
        const enrolledCourseIDs = new Set(enrollments.map((e) => String(e.course_id)));
        console.log(enrolledCourseIDs);
        const allCourses = await dao.findAllCourses();
        const enrollableCourses = allCourses.filter((c) => !enrolledCourseIDs.has(String(c._id)));
        console.log(enrollableCourses)
        res.json(enrollableCourses);
    }


    const createCourse = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.status(401).json({ error: 'User not authenticated' });
        }
        const course = await dao.createCourse(req.body);
        const enrollment = {
            user_id: currentUser._id,
            course_id: course._id
        }
        await createEnrollment(enrollment)
        res.json(course);
    };

    const deleteCourse = async (req, res) => {
        const { id } = req.params;
        const status = await dao.deleteCourse(id);
        res.json(status);
    };
    const updateCourse = async (req, res) => {
        const { id } = req.params;
        const status = await dao.updateCourse(id, req.body);
        res.json(status);
    };

    const findCourse = async (req, res) => {
        const { cid } = req.params;
        const course = await dao.findCourse(cid);
        res.json(course);
    }

    app.get("/api/courses", findAllCourses);
    app.get("/api/courses/new", findNewClasses);
    app.post("/api/courses", createCourse);
    app.delete("/api/courses/:id", deleteCourse);
    app.put("/api/courses/:id", updateCourse)
    app.get("/api/courses/:cid", findCourse)
}

