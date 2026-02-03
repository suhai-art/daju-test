import { Router } from "express";
import TransationController from "../controllers/transation.controller";
import TransationService from "../services/transation.service";
import { AppDataSource } from "../../../database/data-source";
import { TransactionEntity } from "../entity/transition.entity";


const salesRoutes = Router();

const transationService = new TransationService(
    AppDataSource.getRepository(TransactionEntity)
);

const transationController = new TransationController(transationService);

salesRoutes.get("/", transationController.list);

export default salesRoutes;
