import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import { dataSeed } from "./database/data-seed";
import TransationService from "./modules/transation/services/transation.service";
import { TransactionEntity } from "./modules/transation/entity/transition.entity";

export async function bootstrap(): Promise<void> {
    await AppDataSource.initialize();

    const transactionRepository = AppDataSource.getRepository(TransactionEntity)
    const transactionService = new TransationService(transactionRepository)

    await dataSeed(transactionService)
}

