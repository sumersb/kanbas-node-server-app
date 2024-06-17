import model from "./model.js";
export const createModule = (module, cid) => {
    delete module._id;
    module.course = cid;
    return model.create(module);
}
export const findModuleByCID = (cid) => model.find({course : cid})
export const findAllModules = () => model.find();
export const updateModule = (moduleId, module) => model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });