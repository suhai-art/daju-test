import { Router } from "express";

const salesRoutes = Router();

salesRoutes.get("/", (req, res) => {
    res.json({ status: "ok" });
});

export { salesRoutes };
