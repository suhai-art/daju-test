import path from "node:path"
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: path.join(__dirname, "../database/data/database.sqlite"),
    synchronize: true,
    logging: false,
    entities: [path.join(__dirname, "../modules/**/*.entity.{ts,js}")]
})