import { FastifyCorsOptions } from "@fastify/cors";
import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyRegister,
  FastifyReply,
  FastifyRequest,
} from "fastify";

import { CreateCustomerController } from "./controller/createCustumerController";
import { ListCustomersController } from "./controller/listCustomersController";
import { DeleteCustomerController } from "./controller/deleteCustomerController";
import { request } from "node:http";
//Funcao principal das rotas
export async function router(
  fastify: FastifyInstance,
  option: FastifyCorsOptions,
) {
  //Rota get
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    },
  );
  //Rota post
  fastify.post(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    },
  );

  //Rota get
  fastify.get(
    "/listar",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomersController().handle(request, reply);
    },
  );

  //Rota delete
  fastify.delete(
    "/deletar",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply);
    },
  );
}
