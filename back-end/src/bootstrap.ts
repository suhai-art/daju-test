import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import { dataSeed } from "./database/data-seed";
import TransationService from "./modules/transation/services/transation.service";
import { TransactionEntity } from "./modules/transation/entity/transition.entity";
import { access, unlink } from "fs/promises";
import path from "path";

export async function bootstrap(): Promise<void> {
    try {
        await access(path.join(__dirname, "./database/data/database.sqlite"));
        await unlink(path.join(__dirname, "./database/data/database.sqlite"));
    } catch {
        console.log("Arquivo do banco não existe");
    }

    await AppDataSource.initialize();

    const transactionRepository = AppDataSource.getRepository(TransactionEntity)
    const transactionService = new TransationService(transactionRepository)

    await dataSeed(transactionService)
}

