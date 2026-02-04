# Projeto Suhai - Daju Test

Este projeto contém uma aplicação web completa com Front-end (Next.js) e Back-end (Node.js/Express).

## Pré-requisitos

- Docker
- Docker Compose

## Como rodar o projeto

1. Certifique-se de que o Docker está rodando.

2. Na raiz do projeto, execute o seguinte comando para construir e iniciar os containers:

```bash
docker-compose up -d --build
```

3. Acesse a aplicação:
   - **Front-end**: [http://localhost:3000](http://localhost:3000)
   - **Back-end**: [http://localhost:3001](http://localhost:3001)

## Estrutura

- `front-end/`: Aplicação Next.js
- `back-end/`: API Node.js com Express e SQLite
