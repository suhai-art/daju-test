import express from "express";
import transationRoutes from "./modules/transation/routes/transation.route";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/transation", transationRoutes);
