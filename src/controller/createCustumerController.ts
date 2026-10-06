import { FastifyRequest, FastifyRegister, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/createCustumerService";

class CreateCustomerController {

  async handle(request: FastifyRequest, reply: FastifyReply) {

    const { name, email } = request.body as { name: string, email: string};
    console.log(name, email);

    const createCustomerService = new CreateCustomerService();

    const result = await createCustomerService.execute({name, email});

    reply.send(result);
  }
}

export { CreateCustomerController };
