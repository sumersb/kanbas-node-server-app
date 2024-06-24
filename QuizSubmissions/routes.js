import * as dao from "./dao.js";

export default function QuizSubmissionRoutes(app) {

    const createSubmission = async (req, res) => {
        const currentUser = req.session["currentUser"];
        const s = {...req.body, user_id : currentUser._id}
        const submission = await dao.createSubmission(s);
        res.json(submission);
    };

    const deleteSubmission = async (req, res) => {
        const status = await dao.findByStudentQuiz(req.body)
        res.json(status);
    };
    const findAllSubmissions = async (req, res) => {
        const submissions = await dao.findAllSubmissions();
        res.json(submissions);
        return;
    };
    const findSubmissionByQuizID = async (req, res) => {
        const currentUser = req.session["currentUser"];
        const {qid} = req.params;
        const submission = await dao.findByStudentQuiz(currentUser._id, qid);
        res.json(submission);
        return;
    };
    const updateSubmission = async (req, res) => {
        const status = await dao.updateSubmission(req.body);
        res.json(status);
    };

    app.get("/api/submissions", findAllSubmissions);
    app.get("/api/submissions/:qid", findSubmissionByQuizID);
    app.put("/api/submissions/:qid", updateSubmission);
    app.delete("/api/submissions/:qid", deleteSubmission);
    app.post("/api/submissions", createSubmission);

}
