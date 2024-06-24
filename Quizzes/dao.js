import model from "./model.js";
export const createQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz);
}

export const findAllQuizzes = () => model.find();

export const findQuizzesByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({
        $or: [{ title: { $regex: regex } }],
    });
};
export const findQuizzesByCID = (cid) => model.find({course_id : cid})

export const findQuizById = (quizID) => model.findById(quizID);
export const updateQuiz = (quiz) => model.updateOne({ _id: quiz._id }, { $set: quiz });
export const deleteQuiz = (quizID) => model.deleteOne({ _id: quizID });