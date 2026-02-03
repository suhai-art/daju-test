import express from "express";
import salesRoutes from "./modules/transation/routes/transition.route";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/sales", salesRoutes);
