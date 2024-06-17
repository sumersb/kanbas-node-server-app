import * as dao from "./dao.js";
export default function ModuleRoutes(app) {

    const getModuleByCourseId = async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findModuleByCID(cid);
        res.json(modules);
    }
    const findAllModules = async (req, res) => {
        const modules = await dao.findAllModules();
        res.json(modules);
        return;
    };
    const createModule = async (req, res) => {
        const { cid } = req.params;
        const module = await dao.createModule(req.body, cid);
        res.json(module);
    };
    const deleteModule = async (req, res) => {
        const { mid } = req.params;
        const status = await dao.deleteModule(mid);
        res.json(status);
    };
    const updateModule = async (req, res) => {
        const { mid } = req.params;
        const status = await dao.updateModule(mid, req.body);
        res.json(status);
    };
    app.get("/api/courses/:cid/modules", getModuleByCourseId);
    app.get("/api/modules", findAllModules);
    app.post("/api/courses/:cid/modules", createModule);
    app.delete("/api/modules/:mid", deleteModule);
    app.put("/api/modules/:mid",updateModule)
}
