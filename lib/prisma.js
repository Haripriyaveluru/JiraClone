import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db

//globalThis.prisma: This global variable ensures that the prisma client instance is reused
// across hot reloads during development. Without this,eachtime your application reloads,
// a new instance of the prisma client would be created,
// potentiall leading to connection issues.