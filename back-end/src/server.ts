import { app } from "./app";
import { bootstrap } from "./bootstrap";

const PORT = Number(process.env.PORT) || 3001;

async function main() {
    await bootstrap();

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}

main().catch((err) => {
    console.error("Falha ao iniciar aplicação:", err);
    process.exitCode = 1;
});

