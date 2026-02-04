import express from "express";
import transationRoutes from "./modules/transation/routes/transation.route";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/transation", transationRoutes);
