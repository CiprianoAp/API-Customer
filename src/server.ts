import fastify from "fastify";
import cors from "@fastify/cors";
import { router } from "./routes";

const app = fastify({
  logger: true,
});

//meedllewere
app.setErrorHandler((error, request, reply)=>{
    const message = error instanceof Error ? error.message : "Internal server error";
    reply.code(400).send({message})
})


const start = async () => {
  //Chamar a rota
  await app.register(router);
  await app.register(cors);
  try {
    //Ouvir o server
    await app.listen({ port: 3333 });

  } catch (err) {

    process.exit(1);

  }
};
//Executar a funcao
start();
