import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

const { combinedEnv } = loadEnvConfig(process.cwd(), true);

const databaseUrl = combinedEnv.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is required for Drizzle configuration.");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: databaseUrl,
  },
});
