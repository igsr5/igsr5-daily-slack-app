import { PrismaClient } from "@prisma/client";
import { newBoltApp } from "./app";

const prismaClient = new PrismaClient();

const boltApp = newBoltApp();
(async () => {
  await boltApp.start(Number(process.env.PORT) || 3000);
  console.log("⚡️ Bolt app is running!");
})();

export const getPrismaClient = () => {
  return prismaClient;
};
