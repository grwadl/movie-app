import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const databaseConnection: PrismaClient =
  globalForPrisma.prisma || new PrismaClient();
