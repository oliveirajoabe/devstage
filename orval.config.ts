import { defineConfig } from "orval";

// precisa rodar o comando npx orval para gerar o arquivo
export default defineConfig({
    api: {
        input: "http://localhost:3333/docs/json",
        output: {
            target: "./src/http/api.ts", // vai gerar esse arquivo na pasta src/http/api.ts
            client: "fetch",
            httpClient: "fetch",
            clean: true, // quando gerar o arquivo, ele vaia aparar o anterior
            baseUrl: "http://localhost:3333",
            override: {
                fetch: {
                    includeHttpResponseReturnType: false, // para não transformar a resposta em um objeto
                },
            },
        },
    },
});
