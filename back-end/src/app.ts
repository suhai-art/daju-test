import express from "express";
import { salesRoutes } from "./modules/sales/routes/salesRoutes";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/sales", salesRoutes);
