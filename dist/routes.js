"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = router;
const createCustumerController_1 = require("./controller/createCustumerController");
const listCustomersController_1 = require("./controller/listCustomersController");
const deleteCustomerController_1 = require("./controller/deleteCustomerController");
//Funcao principal das rotas
async function router(fastify, option) {
    //Rota get
    fastify.get("/teste", async (request, reply) => {
        return { ok: true };
    });
    //Rota post
    fastify.post("/customer", async (request, reply) => {
        return new createCustumerController_1.CreateCustomerController().handle(request, reply);
    });
    //Rota get
    fastify.get("/listar", async (request, reply) => {
        return new listCustomersController_1.ListCustomersController().handle(request, reply);
    });
    //Rota delete
    fastify.delete("/deletar", async (request, reply) => {
        return new deleteCustomerController_1.DeleteCustomerController().handle(request, reply);
    });
}
