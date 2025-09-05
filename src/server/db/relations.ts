import { userMonthlySummary } from "~/features/analytics/server/db/schema";
import { user } from "~/features/users/server/db/schema";
import { categories } from "~/features/categories/server/db/schema";
import { expenses } from "~/features/expenses/server/db/schema";
import { credits } from "~/features/credits/server/db/schema";
import { finances } from "~/features/finances/server/db/schema";
import { goals } from "~/features/goals/server/db/schema";
import { receipts } from "~/features/receipts/server/db/schema";
import { relations } from "drizzle-orm";

export const usersRelations = relations(user, ({ many, one }) => ({
  categories: many(categories),
  expenses: many(expenses),
  credits: many(credits),
  finance: one(finances),
  goals: many(goals),
  receipts: many(receipts),
  monthlySummaries: many(userMonthlySummary),
}));

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  user: one(user, {
    fields: [categories.userId],
    references: [user.id],
  }),
  parentCategory: one(categories, {
    fields: [categories.parentCategoryId],
    references: [categories.id],
  }),
  subcategories: many(categories),
  expenses: many(expenses),
  goals: many(goals),
  topCategorySummaries: many(userMonthlySummary),
}));

export const expensesRelations = relations(expenses, ({ one }) => ({
  user: one(user, {
    fields: [expenses.userId],
    references: [user.id],
  }),
  category: one(categories, {
    fields: [expenses.categoryId],
    references: [categories.id],
  }),
  receipt: one(receipts, {
    fields: [expenses.receiptId],
    references: [receipts.id],
  }),
  credit: one(credits, {
    fields: [expenses.creditId],
    references: [credits.id],
  }),
}));

export const creditsRelations = relations(credits, ({ one, many }) => ({
  user: one(user, {
    fields: [credits.userId],
    references: [user.id],
  }),
  expenses: many(expenses),
}));

export const financesRelations = relations(finances, ({ one }) => ({
  user: one(user, {
    fields: [finances.userId],
    references: [user.id],
  }),
}));

export const goalsRelations = relations(goals, ({ one }) => ({
  user: one(user, {
    fields: [goals.userId],
    references: [user.id],
  }),
  category: one(categories, {
    fields: [goals.categoryId],
    references: [categories.id],
  }),
}));

export const receiptsRelations = relations(receipts, ({ one, many }) => ({
  user: one(user, {
    fields: [receipts.userId],
    references: [user.id],
  }),
  expenses: many(expenses),
}));

export const userMonthlySummaryRelations = relations(
  userMonthlySummary,
  ({ one }) => ({
    user: one(user, {
      fields: [userMonthlySummary.userId],
      references: [user.id],
    }),
    topCategory: one(categories, {
      fields: [userMonthlySummary.topCategoryId],
      references: [categories.id],
    }),
  }),
);
