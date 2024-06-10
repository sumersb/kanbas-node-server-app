const module = {
    id: 1, name: "Test Module",
    description: "Testing a module server endpoint",
    course: "CS5610"
};
export default function Module(app) {
    app.get("/lab5/module", (req, res) => {
        console.log("Here I've been hit")
        res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });
};
