"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerController = void 0;
const deleCustomerService_1 = require("../services/deleCustomerService");
class DeleteCustomerController {
    async handle(request, reply) {
        const { id } = request.body;
        const customerService = new deleCustomerService_1.DeleteCustomerService();
        const customer = await customerService.execute({ id });
        reply.send(customer);
    }
}
exports.DeleteCustomerController = DeleteCustomerController;
