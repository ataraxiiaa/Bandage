import { pgTable, serial, varchar, timestamp, integer, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 13 }).notNull(),
});

export const payments = pgTable("payments", {
    id: serial("id").primaryKey(),
    stripeid: text("stripeid").notNull().unique(),
    amount: integer("amount"),
    userid: integer("userid").references(() => users.id),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
export type Payment = InferSelectModel<typeof payments>;
export type NewPayment = InferInsertModel<typeof payments>;

export const db = drizzle(sql);
