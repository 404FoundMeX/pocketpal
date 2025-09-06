import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "~/env";
import * as userSchema from "~/features/users/server/db/schema";
import * as categorySchema from "~/features/categories/server/db/schema";
import * as expenseSchema from "~/features/expenses/server/db/schema";
import * as creditSchema from "~/features/credits/server/db/schema";
import * as financeSchema from "~/features/finances/server/db/schema";
import * as goalSchema from "~/features/goals/server/db/schema";
import * as receiptSchema from "~/features/receipts/server/db/schema";
import * as userMonthlySummarySchema from "~/features/analytics/server/db/schema";
import * as relations from "./relations";

export * from "~/features/users/server/db/schema";
export * from "~/features/categories/server/db/schema";
export * from "~/features/expenses/server/db/schema";
export * from "~/features/credits/server/db/schema";
export * from "~/features/finances/server/db/schema";
export * from "~/features/goals/server/db/schema";
export * from "~/features/receipts/server/db/schema";
export * from "~/features/analytics/server/db/schema";
export * from "./relations";

const schema = {
  ...userSchema,
  ...categorySchema,
  ...expenseSchema,
  ...creditSchema,
  ...financeSchema,
  ...goalSchema,
  ...receiptSchema,
  ...userMonthlySummarySchema,
  ...relations,
};

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.DATABASE_URL);
if (env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema, logger: true });
