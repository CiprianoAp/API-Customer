"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerController = void 0;
const createCustumerService_1 = require("../services/createCustumerService");
class CreateCustomerController {
    async handle(request, reply) {
        const { name, email } = request.body;
        console.log(name, email);
        const createCustomerService = new createCustumerService_1.CreateCustomerService();
        const result = await createCustomerService.execute({ name, email });
        reply.send(result);
    }
}
exports.CreateCustomerController = CreateCustomerController;
