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
export const findQuizByCourseID = (courseID) => model.find({course_id: courseID});

export const findQuizById = (quizID) => model.findById(quizID);
export const updateQuiz = (quizID, quiz) => model.updateOne({ _id: quizID }, { $set: quiz });
export const deleteQ = (quizID) => model.deleteOne({ _id: quizID });