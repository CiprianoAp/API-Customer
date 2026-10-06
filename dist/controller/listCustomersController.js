"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomersController = void 0;
const listCustomerService_1 = require("../services/listCustomerService");
class ListCustomersController {
    async handle(request, reply) {
        const listCustomerService = new listCustomerService_1.ListCustomersService();
        const customers = await listCustomerService.execute();
        reply.send(customers);
    }
}
exports.ListCustomersController = ListCustomersController;
