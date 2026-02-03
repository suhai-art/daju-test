# Back-end Node + Express + TypeScript

## Scripts

- **Desenvolvimento**: `npm run dev`
- **Build**: `npm run build`
- **Produção**: `npm start`

## Como rodar

1. Instalar dependências:
   ```bash
   npm install
   ```
2. Ambiente de desenvolvimento (com reload):
   ```bash
   npm run dev
   ```
3. Build para produção:
   ```bash
   npm run build
   ```
4. Rodar build:
   ```bash
   npm start
   ```

O servidor sobe por padrão na porta `3000` (ou na porta definida em `PORT`).

## CSV to JSON map

``` json
{
  "invoice": nr_dctoorigem,
  "transacation": {
    "sale": {
      "product": cd_produto,
      "company": cd_empresa,
      "is_reversal": in_estorno == false,
      "value": round
    },
    "refund": {
      "product": cd_produto,
      "company": cd_empresa,
      "is_reversal": in_estorno == true,
      "value": round
    }
  }
}
```