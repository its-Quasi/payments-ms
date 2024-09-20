import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { envs } from "../config/envs";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger("Paymentss-MS");
  const app = await NestFactory.create(AppModule);
  const { port } = envs;
  await app.listen(port);
  logger.log(`Payments-MS running on port ${port}`);
}
bootstrap();
