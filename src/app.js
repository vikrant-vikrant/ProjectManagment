import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

//basic configration
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser);

//CORS configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
//import the routes
import healthCheck from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";
app.use("/api/v1/healthcheck", healthCheck);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("welcome home");
});
app.get("/about", (req, res) => {
  res.send("welcome about section");
});

export default app;
