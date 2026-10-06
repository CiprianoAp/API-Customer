"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerService = void 0;
// import { PrismaClient } from "../prisma";
const prismas_1 = __importDefault(require("../prismas"));
class CreateCustomerService {
    async execute({ name, email }) {
        if (!name || !email) {
            throw new Error("Preencha todos os campos");
        }
        const costumer = await prismas_1.default.customer.create({
            data: {
                name,
                email,
                status: true
            }
        });
        return costumer;
    }
}
exports.CreateCustomerService = CreateCustomerService;
