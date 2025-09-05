import {
  pgTable,
  text,
  varchar,
  timestamp,
  integer,
  uuid,
  decimal,
  serial,
  pgEnum,
} from "drizzle-orm/pg-core";
import { user } from "~/features/users/server/db/schema";

export const receiptStatusEnum = pgEnum("receipt_status", [
  "pending",
  "processed",
  "failed",
]);

export const receipts = pgTable("receipts", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom().notNull().unique(),
  userId: integer("user_id")
    .references(() => user.id)
    .notNull(),
  fileName: varchar("file_name", { length: 255 }).notNull(),
  originalFileName: varchar("original_file_name", { length: 255 }).notNull(),
  filePath: varchar("file_path", { length: 500 }).notNull(),
  fileSize: integer("file_size").notNull(),
  mimeType: varchar("mime_type", { length: 100 }).notNull(),
  merchantName: varchar("merchant_name", { length: 200 }),
  totalAmount: decimal("total_amount", { precision: 12, scale: 2 }),
  transactionDate: timestamp("transaction_date"),
  ocrText: text("ocr_text"),
  status: receiptStatusEnum("status").default("pending").notNull(),
  processedAt: timestamp("processed_at"),
  tags: text("tags"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
