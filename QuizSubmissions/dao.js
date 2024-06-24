import model from "./model.js";
export const createSubmission = (submission) => {
    delete submission._id;
    return model.create(submission);
}

export const findAllSubmissions = () => model.find();

export const findByStudentQuiz= (sid,qid) => model.findOne({user_id : sid, quiz_id : qid})

export const updateSubmission = (submission) => model.updateOne({ _id: submission._id }, { $set: submission });
export const deleteSubmission = (submission) => model.deleteOne({ _id: submission._id});