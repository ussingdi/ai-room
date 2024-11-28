import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:AkBspOXoq6w4@ep-blue-dream-a50leaxq.us-east-2.aws.neon.tech/ai-room-database?sslmode=require",
  },
});
