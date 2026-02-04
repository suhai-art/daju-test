import { app } from "./app";
import { bootstrap } from "./bootstrap";

const PORT = process.env.PORT || 3001;

async function main() {
    await bootstrap();

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}

main().catch((err) => {
    console.error("Falha ao iniciar aplicação:", err);
    process.exitCode = 1;
});

