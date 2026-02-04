export interface SaleDto {
    company: number;
    isReversal: boolean;
    product: number;
    value: number;
}

export interface RefundDto {
    company: number;
    product: number;
    value: number;
}

export interface TransactionDto {
    sale: SaleDto | null;
    refund: RefundDto | null;
}

export interface TransationItemDto {
    invoice: number;
    transaction: TransactionDto;
}

export type TransationResponseDto = TransationItemDto[];
