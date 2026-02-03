export interface TransitionResponseDto {
    invoice: number;
    transaction: {
        sale: TransitionItemResponseDto | null;
        refund: TransitionItemResponseDto | null;
    };
}

export interface TransitionItemResponseDto {
    product: number;
    company: number;
    value: number;
    isReversal: boolean;
}