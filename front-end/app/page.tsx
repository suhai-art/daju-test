'use client';

import { useEffect, useState } from "react";
import { TransactionsTable } from "./components/transaction-table";
import type { TransationResponseDto } from "./transation/types";

export default function Home() {
    const [data, setData] = useState<TransationResponseDto>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transation`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-background p-6">
            <TransactionsTable data={data} />
        </div>
    );
}
