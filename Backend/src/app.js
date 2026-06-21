import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json({ limit: "4kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));

// routes
app.use("/api/auth", authRoutes);

export default app;
