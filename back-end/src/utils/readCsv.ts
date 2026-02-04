import * as fs from "fs"
import * as readline from "readline"

interface Product {
    cd_produto: string;
    tp_valor: string;
    cd_empresa: string;
    round: string;
    nr_dctoorigem: string;
    nr_sequencia: string;
    cd_valor: string;
    cd_historico: string;
    in_estorno: string;
    dt_movimento: string;
    dt_cadastro: string;
}

export default async function readCsv(filePath: string): Promise<Product[]> {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const products: Product[] = [];
    let headers: string[] = [];
    let firstRow = true;

    for await (const row of rl) {
        if (firstRow) {
            headers = row.split(',');
            firstRow = false;
            continue;
        }

        const valores = row.split(',');
        const product: any = {};

        headers.forEach((header, index) => {
            product[header] = valores[index];
        });

        products.push(product as Product);
    }

    return products;
}