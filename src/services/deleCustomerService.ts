import prismaClient from "../prisma";
interface deleteCustomerProps {
  id: string;
}
class DeleteCustomerService {
  async execute({ id }: deleteCustomerProps) {
    if (!id) {
      throw new Error("Solicitação errada.");
    }
    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if(!findCustomer){
        throw new Error("Cliente nāo existe!");
    }
    await prismaClient.customer.delete({
        where:{
            id: findCustomer.id
        }
    })

    return {message: "Deletado com sucesso"}
  }
}

export { DeleteCustomerService };
