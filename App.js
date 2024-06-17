import express from 'express'
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors"
import Hello from "./Hello.js"
import Lab5 from './Lab5/index.js';
import CourseRoutes from './Courses/routes.js';
import ModuleRoutes from './Modules/routes.js';
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import UserRoutes from "./Users/routes.js";
import session from "express-session";
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
console.log(CONNECTION_STRING);
const app = express();
app.use(
    cors({
        credentials: true,
        origin: [process.env.NETLIFY_URL || "http://localhost:3000", "*"],
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Hello(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);