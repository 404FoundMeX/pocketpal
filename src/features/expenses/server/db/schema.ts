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
import { categories } from "~/features/categories/server/db/schema";
import { receipts } from "~/features/receipts/server/db/schema";
import { credits } from "~/features/credits/server/db/schema";
import { user } from "~/features/users/server/db/schema";

export const expenseTypeEnum = pgEnum("expense_type", ["income", "expense"]);

export const expenses = pgTable("expenses", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom().notNull().unique(),
  userId: integer("user_id")
    .references(() => user.id)
    .notNull(),
  categoryId: integer("category_id")
    .references(() => categories.id)
    .notNull(),
  amount: decimal("amount", { precision: 12, scale: 2 }).notNull(),
  type: expenseTypeEnum("type").notNull(),
  description: text("description").notNull(),
  notes: text("notes"),
  transactionDate: timestamp("transaction_date").notNull(),
  merchantName: varchar("merchant_name", { length: 200 }),
  location: varchar("location", { length: 200 }),
  tags: text("tags"), // JSON array of tags
  receiptId: integer("receipt_id").references(() => receipts.id),
  creditId: integer("credit_id").references(() => credits.id),
  isRecurring: boolean("is_recurring").default(false).notNull(),
  recurringPattern: varchar("recurring_pattern", { length: 50 }), // daily, weekly, monthly, yearly
  recurringEndDate: timestamp("recurring_end_date"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
