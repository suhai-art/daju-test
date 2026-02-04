import { Router } from "express";
import TransationController from "../controllers/transation.controller";
import TransationService from "../services/transation.service";
import { AppDataSource } from "../../../database/data-source";
import { TransactionEntity } from "../entity/transition.entity";


const transationRoutes = Router();

const transationService = new TransationService(
    AppDataSource.getRepository(TransactionEntity)
);

const transationController = new TransationController(transationService);

transationRoutes.get("/", transationController.list);

export default transationRoutes;
