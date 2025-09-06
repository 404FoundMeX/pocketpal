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
  date,
  pgEnum,
} from "drizzle-orm/pg-core";
import { user } from "~/features/users/server/db/schema";
import { categories } from "~/features/categories/server/db/schema";

export const goalStatusEnum = pgEnum("goal_status", [
  "active",
  "completed",
  "paused",
  "cancelled",
]);

export const goals = pgTable("goals", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom().notNull().unique(),
  userId: text("user_id")
    .references(() => user.id)
    .notNull(),
  title: varchar("title", { length: 200 }).notNull(),
  description: text("description"),
  targetAmount: decimal("target_amount", { precision: 12, scale: 2 }).notNull(),
  currentAmount: decimal("current_amount", { precision: 12, scale: 2 })
    .default("0.00")
    .notNull(),
  targetDate: date("target_date"),
  status: goalStatusEnum("status").default("active").notNull(),
  priority: integer("priority").default(1).notNull(),
  categoryId: integer("category_id").references(() => categories.id),
  monthlyContribution: decimal("monthly_contribution", {
    precision: 12,
    scale: 2,
  }),
  autoContribute: boolean("auto_contribute").default(false).notNull(),
  reminderEnabled: boolean("reminder_enabled").default(true).notNull(),
  reminderFrequency: varchar("reminder_frequency", { length: 20 }).default(
    "weekly",
  ),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
