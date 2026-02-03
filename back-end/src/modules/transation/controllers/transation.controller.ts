import { Request, Response } from "express";
import TransationService from "../services/transation.service";

export default class TransationController {
    constructor(
        private readonly transationService: TransationService
    ) {}

    list = async (req: Request, res: Response) => {
        const result = await this.transationService.list();
        return res.json(result);
    };
}