import prismaClient from '../prismas'


class ListCustomersService{

    async execute(){

        const customers = await prismaClient.customer.findMany()
        return customers;
        
    }
}

export {ListCustomersService}