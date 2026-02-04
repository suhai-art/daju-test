'use client';

import React from "react"

import { useMemo, useState } from 'react';
import type { TransationResponseDto } from '@/app/transation/types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowUpDown, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TransactionsTableProps {
    data: TransationResponseDto;
}

type SortField = 'invoice' | 'product' | 'value' | 'company';
type SortOrder = 'asc' | 'desc';

export function TransactionsTable({ data }: TransactionsTableProps) {
    const [sortField, setSortField] = useState<SortField>('invoice');
    const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    };

    const filteredAndSortedData = useMemo(() => {
        return data
            .sort((a, b) => {
                let aVal: number | undefined;
                let bVal: number | undefined;

                switch (sortField) {
                    case 'invoice':
                        aVal = a.invoice;
                        bVal = b.invoice;
                        break;
                    case 'product':
                        aVal = a.transaction.sale?.product;
                        bVal = b.transaction.sale?.product;
                        break;
                    case 'value':
                        aVal = a.transaction.sale?.value;
                        bVal = b.transaction.sale?.value;
                        break;
                    case 'company':
                        aVal = a.transaction.sale?.company;
                        bVal = b.transaction.sale?.company;
                        break;
                }

                if (aVal === undefined) return 1;
                if (bVal === undefined) return -1;

                return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
            });
    }, [data, sortField, sortOrder]);

    const totalValue = useMemo(() => {
        return data.reduce((acc, item) => {
            return acc + (item.transaction.sale?.value || 0);
        }, 0);
    }, [data]);

    const uniqueInvoices = useMemo(() => {
        return new Set(data.map((item) => item.invoice)).size;
    }, [data]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    const SortButton = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => handleSort(field)}
            className="h-auto p-0 font-medium hover:bg-transparent"
        >
            {children}
            <ArrowUpDown className="ml-1 h-3 w-3" />
        </Button>
    );

    return (
        <div className="space-y-6">

            <Card>
                <CardHeader>
                    <CardTitle>Listagem de Transacoes</CardTitle>
                    <CardDescription>
                        Visualize todas as transacoes de venda com reversao
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        <SortButton field="invoice">Nota Fiscal</SortButton>
                                    </TableHead>
                                    <TableHead>
                                        <SortButton field="company">Empresa</SortButton>
                                    </TableHead>
                                    <TableHead>
                                        <SortButton field="product">Produto</SortButton>
                                    </TableHead>
                                    <TableHead>
                                        <SortButton field="value">Valor</SortButton>
                                    </TableHead>
                                    <TableHead>Tipo</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredAndSortedData.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-24 text-center">
                                            Nenhum resultado encontrado.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredAndSortedData.map((item, index) => (
                                        <TableRow key={`${item.invoice}-${item.transaction.sale?.product}-${index}`}>
                                            <TableCell className="font-medium">#{item.invoice}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline">
                                                    Empresa {item.transaction.sale?.company || item.transaction.refund?.company}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="font-mono text-sm">
                                                {item.transaction.sale?.product || item.transaction.refund?.product}
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {formatCurrency(item.transaction.sale?.value || item.transaction.refund?.value || 0)}
                                            </TableCell>
                                            <TableCell>
                                                {item.transaction.sale && (
                                                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                                                        Venda
                                                    </Badge>
                                                )}
                                                {item.transaction.refund && (
                                                    <Badge variant="secondary">Reembolso</Badge>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>

                    {filteredAndSortedData.length > 0 && (
                        <div className="mt-4 text-sm text-muted-foreground">
                            Mostrando {filteredAndSortedData.length} de {data.length} transacoes
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
