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
} from "drizzle-orm/pg-core";
import { user } from "~/features/users/server/db/schema";

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid').defaultRandom().notNull().unique(),
  userId: integer('user_id').references(() => user.id).notNull(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  color: varchar('color', { length: 7 }).default('#000000'),
  icon: varchar('icon', { length: 50 }),
  isDefault: boolean('is_default').default(false).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  parentCategoryId: integer('parent_category_id'),
  // Budget Integration
  monthlyBudget: decimal('monthly_budget', { precision: 12, scale: 2 }).default('0.00'),
  budgetPeriod: varchar('budget_period', { length: 20 }).default('monthly').notNull(),
  budgetAlert: boolean('budget_alert').default(true).notNull(),
  budgetAlertThreshold: decimal('budget_alert_threshold', { precision: 5, scale: 2 }).default('80.00').notNull(),
  currentSpent: decimal('current_spent', { precision: 12, scale: 2 }).default('0.00').notNull(),
  budgetStartDate: date('budget_start_date'),
  budgetEndDate: date('budget_end_date'),
  rolloverUnused: boolean('rollover_unused').default(false).notNull(),
  rolloverAmount: decimal('rollover_amount', { precision: 12, scale: 2 }).default('0.00').notNull(),
  lastBudgetReset: timestamp('last_budget_reset'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  });