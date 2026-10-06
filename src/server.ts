import fastify from "fastify";
import cors from "@fastify/cors";
import { router } from "./routes";

const app = fastify({
  logger: true,
});
app.get;
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
