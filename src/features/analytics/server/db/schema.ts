import {
  pgTable,
  text,
  timestamp,
  integer,
  uuid,
  serial,
  decimal,
} from "drizzle-orm/pg-core";
import { user } from "~/features/users/server/db/schema";
import { categories } from "~/features/categories/server/db/schema";

export const userMonthlySummary = pgTable("user_monthly_summary", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom().notNull().unique(),
  userId: integer("user_id").references(() => user.id).notNull(),
  year: integer("year").notNull(),
  month: integer("month").notNull(),
  totalIncome: decimal("total_income", { precision: 12, scale: 2 }).default("0.00").notNull(),
  totalExpenses: decimal("total_expenses", { precision: 12, scale: 2 }).default("0.00").notNull(),
  netSavings: decimal("net_savings", { precision: 12, scale: 2 }).default("0.00").notNull(),
  topCategoryId: integer("top_category_id").references(() => categories.id),
  topCategoryAmount: decimal("top_category_amount", { precision: 12, scale: 2 }).default("0.00").notNull(),
  creditUtilization: decimal("credit_utilization", { precision: 5, scale: 2 }).default("0.00").notNull(),
  goalsProgress: text("goals_progress"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});