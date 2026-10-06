"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomersService = void 0;
const prismas_1 = __importDefault(require("../prismas"));
class ListCustomersService {
    async execute() {
        const customers = await prismas_1.default.customer.findMany();
        return customers;
    }
}
exports.ListCustomersService = ListCustomersService;
