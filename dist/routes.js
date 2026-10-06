"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = router;
const createCustumerController_1 = require("./controller/createCustumerController");
//Funcao principal das rotas
async function router(fastify, option) {
    //Rota get
    fastify.get("/teste", async (request, reply) => {
        return { ok: true };
    });
    //Rota post 
    fastify.post("customer", async (request, reply) => {
        return new createCustumerController_1.CreateCustomerController().handle(request, reply);
    });
}
