"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const routes_1 = require("./routes");
const app = (0, fastify_1.default)({
    logger: true,
});
app.get;
const start = async () => {
    //Chamar a rota
    await app.register(routes_1.router);
    await app.register(cors_1.default);
    try {
        //Ouvir o server
        await app.listen({ port: 3333 });
    }
    catch (err) {
        process.exit(1);
    }
};
//Executar a funcao
start();
