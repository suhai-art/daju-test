export interface CreateTransactionDto {
    invoice: number;
    product: number;
    company: number;
    value: number;
    isReversal: boolean;
}
