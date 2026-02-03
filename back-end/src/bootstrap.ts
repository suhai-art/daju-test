import "reflect-metadata";
import { AppDataSource } from "./database/data-source";

export async function bootstrap(): Promise<void> {
    await AppDataSource.initialize();
}

