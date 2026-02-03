import { Repository } from "typeorm";
import { TransactionEntity } from "../entity/transition.entity"
import { CreateTransactionDto } from "../dtos/createTransationDto";
import { TransitionResponseDto } from "../dtos/transitionResponseDto";

export default class TransationService {
    constructor(
        private readonly transactionRepository: Repository<TransactionEntity>
    ) {}


    async create(data: CreateTransactionDto): Promise<void> {
        await this.transactionRepository.save(data);
        return 
    }

    async list(): Promise<TransitionResponseDto[]> {
        const response: TransitionResponseDto[] = []
        const find = await this.transactionRepository.find()

        console.log(find)

        return response
    }
}
