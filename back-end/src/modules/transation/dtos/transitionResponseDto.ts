export interface TransationResponseDto {
    invoice: number;
    transaction: TransationDto;
}

export interface TransationDto {
    sale: TransationItemResponseDto | null;
    refund: TransationItemResponseDto | null;
}

export interface TransationItemResponseDto {
    product: number;
    company: number;
    value: number;
    isReversal: boolean;
}