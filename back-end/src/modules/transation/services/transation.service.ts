import { Repository } from "typeorm";
import { TransactionEntity } from "../entity/transition.entity"
import { CreateTransactionDto } from "../dtos/createTransationDto";
import { TransationItemResponseDto, TransationResponseDto } from "../dtos/transitionResponseDto";

export default class TransationService {
    constructor(
        private readonly transactionRepository: Repository<TransactionEntity>
    ) { }


    async create(data: CreateTransactionDto): Promise<void> {
        await this.transactionRepository.save(data);
        return
    }

    async list(): Promise<TransationResponseDto[]> {
        const find = await this.transactionRepository.find()

        return find.map((transationDb) => {
            const transationItem: TransationItemResponseDto = {
                company: transationDb.company,
                isReversal: true,
                product: transationDb.product,
                value: transationDb.value
            }
            if (transationDb.isReversal) {
                return {
                    invoice: transationDb.invoice,
                    transaction: {
                        sale: null,
                        refund: transationItem
                    }
                }
            }

            return {
                invoice: transationDb.invoice,
                transaction: {
                    sale: transationItem,
                    refund: null
                }
            }

        })
    }
}
