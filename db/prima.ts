import { PrismaClient } from '../generated/client/deno/edge.ts';
import { load } from "https://deno.land/std@0.207.0/dotenv/mod.ts";

const env = await load()
console.log(env)
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: env.DATABASE_URL
        }
    }
});

export default prisma;