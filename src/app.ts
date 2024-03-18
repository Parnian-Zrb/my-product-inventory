import express from "express";

import todoRouter from "./routes/todoRoutes";
import userRouter from "./routes/userRoutes";
const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));

// ROUTES
app.use("/todos", todoRouter);
app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Our Express Server!!!!");
});

export default app;
