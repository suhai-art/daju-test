import * as path from 'path';
import TransationService from '../modules/transation/services/transation.service';
import readCsv from '../utils/readCsv';
import { CreateTransactionDto } from '../modules/transation/dtos/createTransationDto';

export async function dataSeed(
    transactionService: TransationService
): Promise<void> {
    try {
        const filePath = path.join(__dirname, './data/data.csv');

        console.log('Lendo arquivo CSV...');
        const products = await readCsv(filePath);

        let errors = 0

        console.log(`${products.length} registros encontrados`);

        for (const product of products) {
            try {
                const transactionDto: CreateTransactionDto = {
                    invoice: parseInt(product.nr_dctoorigem),
                    product: parseInt(product.cd_produto),
                    company: parseInt(product.cd_empresa),
                    value: parseFloat(product.round),
                    isReversal: product.in_estorno === 'T'
                };

                await transactionService.create(transactionDto);
            } catch (error) {
                errors++
                console.error(`Erro ao salvar registro:`, error);
            }
        }

        if (errors > 0) {
            console.log(`${errors} registros com erro`);
        }
    } catch (error) {
        console.error('Erro ao carregar dados do CSV:', error);
        throw error;
    }
}