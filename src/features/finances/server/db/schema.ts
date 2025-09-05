import {
  pgTable,
  timestamp,
  integer,
  uuid,
  serial,
  decimal,
} from "drizzle-orm/pg-core";
import { user } from "~/features/users/server/db/schema";

export const finances = pgTable("finances", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom().notNull().unique(),
  userId: integer("user_id")
    .references(() => user.id)
    .notNull(),
  balance: decimal("balance", { precision: 12, scale: 2 })
    .default("0.00")
    .notNull(),
  totalIncome: decimal("total_income", { precision: 12, scale: 2 })
    .default("0.00")
    .notNull(),
  totalExpenses: decimal("total_expenses", { precision: 12, scale: 2 })
    .default("0.00")
    .notNull(),
  totalCreditDebt: decimal("total_credit_debt", { precision: 12, scale: 2 })
    .default("0.00")
    .notNull(),
  netWorth: decimal("net_worth", { precision: 12, scale: 2 })
    .default("0.00")
    .notNull(),
  monthlyIncome: decimal("monthly_income", { precision: 12, scale: 2 })
    .default("0.00")
    .notNull(),
  monthlyExpenses: decimal("monthly_expenses", { precision: 12, scale: 2 })
    .default("0.00")
    .notNull(),
  emergencyFund: decimal("emergency_fund", { precision: 12, scale: 2 })
    .default("0.00")
    .notNull(),
  savingsGoal: decimal("savings_goal", { precision: 12, scale: 2 })
    .default("0.00")
    .notNull(),
  budgetLimit: decimal("budget_limit", { precision: 12, scale: 2 }),
  lastCalculated: timestamp("last_calculated").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
