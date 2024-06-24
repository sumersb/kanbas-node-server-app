import * as dao from "./dao.js";
export default function QuizRoutes(app) {
    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };
    const deleteQuiz = async (req, res) => {
        const {quizID} = req.params;
        const status = await dao.deleteQuiz(quizID);
        res.json(status);
    };
    const findAllQuizzes = async (req, res) => {
        const { courseID, title } = req.query;
        if (courseID) {
            const quizzes = await dao.findQuizzesByCID(courseID);
            res.json(quizzes);
            return;
        }
        if (title) {
            const quizzes = await dao.findQuizzesByPartialName(title);
            res.json(quizzes);
            return;
        }
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
        return;
    };
    const findQuizById = async (req, res) => {
        const quiz = await dao.findQuizById(req.params.quizID);
        res.json(quiz);
        return;
    };
    const updateQuiz = async (req, res) => {
        const status = await dao.updateQuiz(req.body);
        res.json(status);
    };

    app.get("/api/quizzes", findAllQuizzes);
    app.get("/api/quizzes/:quizID", findQuizById);
    app.put("/api/quizzes/:quizID", updateQuiz);
    app.delete("/api/quizzes/:quizID", deleteQuiz);
    app.post("/api/quizzes", createQuiz);

}
