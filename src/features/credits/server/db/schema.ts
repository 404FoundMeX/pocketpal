import {
  pgTable,
  text,
  varchar,
  timestamp,
  boolean,
  integer,
  uuid,
  serial,
  decimal,
  pgEnum,
} from "drizzle-orm/pg-core";
import { user } from "~/features/users/server/db/schema";

export const creditTypeEnum = pgEnum("credit_type", [
  "credit_card",
  "loan",
  "line_of_credit",
]);

export const credits = pgTable("credits", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom().notNull().unique(),
  userId: text("user_id")
    .references(() => user.id)
    .notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  type: creditTypeEnum("type").notNull(),
  currentBalance: decimal("current_balance", { precision: 12, scale: 2 })
    .default("0.00")
    .notNull(),
  creditLimit: decimal("credit_limit", { precision: 12, scale: 2 }),
  interestRate: decimal("interest_rate", { precision: 5, scale: 2 }), // APR
  minimumPayment: decimal("minimum_payment", { precision: 12, scale: 2 }),
  dueDate: integer("due_date"), // Day of month (1-31)
  statementDate: integer("statement_date"), // Day of month (1-31)
  bankName: varchar("bank_name", { length: 100 }),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
