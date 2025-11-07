import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, blob } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = sqliteTable("users", {
  id: text("id").primaryKey().$defaultFn(() => new Date().toISOString()),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("admin"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  role: true,
});

export const loginSchema = z.object({
  username: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type LoginRequest = z.infer<typeof loginSchema>;

export const blogs = sqliteTable("blogs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  author: text("author").notNull().default("Muhammad Sameer"),
  imageUrl: text("image_url"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  published: integer("published", { mode: 'boolean' }).notNull().default(false),
  createdAt: integer("created_at", { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const insertBlogSchema = createInsertSchema(blogs, {
    title: z.string().min(1, "Title is required"),
    slug: z.string().min(1, "Slug is required"),
    content: z.string().min(1, "Content is required"),
    excerpt: z.string().min(1, "Excerpt is required"),
    author: z.string().default("Muhammad Sameer"),
    imageUrl: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    published: z.boolean().default(false),
});

export type InsertBlog = z.infer<typeof insertBlogSchema>;
export type Blog = typeof blogs.$inferSelect;

export const portfolios = sqliteTable("portfolios", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    description: text("description").notNull(),
    imageUrl: text("image_url"),
    projectUrl: text("project_url"),
    category: text("category"),
    technologies: text("technologies"),
    published: integer("published", { mode: 'boolean' }).notNull().default(true),
    createdAt: integer("created_at", { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const insertPortfolioSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    imageUrl: z.string().optional(),
    projectUrl: z.string().optional(),
    category: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    published: z.boolean().default(true),
});

export type InsertPortfolio = z.infer<typeof insertPortfolioSchema>;
export type Portfolio = typeof portfolios.$inferSelect;

export const services = sqliteTable("services", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    description: text("description").notNull(),
    icon: text("icon").notNull(),
    iconUrl: text("icon_url"),
    features: text("features"),
    published: integer("published", { mode: 'boolean' }).notNull().default(true),
    createdAt: integer("created_at", { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const insertServiceSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    icon: z.string().min(1, "Icon is required"),
    iconUrl: z.string().optional(),
    features: z.array(z.string()).default([]),
    published: z.boolean().default(true),
});

export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;

export const subscriptions = sqliteTable("subscriptions", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    email: text("email").notNull().unique(),
    createdAt: integer("created_at", { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const insertSubscriptionSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export type InsertSubscription = z.infer<typeof insertSubscriptionSchema>;
export type Subscription = typeof subscriptions.$inferSelect;

export const contacts = sqliteTable("contacts", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    email: text("email").notNull(),
    service: text("service"),
    message: text("message").notNull(),
    status: text("status").notNull().default("unread"),
    createdAt: integer("created_at", { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const insertContactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    service: z.string().optional(),
    message: z.string().min(1, "Message is required"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export const pages = sqliteTable("pages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  featuredImageUrl: text("featured_image_url"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  status: text("status").notNull().default("draft"),
  author: text("author").notNull().default("Muhammad Sameer"),
  parentId: integer("parent_id"),
  template: text("template").default("default"),
  order: integer("order").default(0),
  createdAt: integer("created_at", { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const insertPageSchema = createInsertSchema(pages, {
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().optional(),
  featuredImageUrl: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  status: z.enum(["draft", "published", "private"]).default("draft"),
  author: z.string().default("Muhammad Sameer"),
  parentId: z.number().optional(),
  template: z.string().default("default"),
  order: z.number().default(0),
});

export type InsertPage = z.infer<typeof insertPageSchema>;
export type Page = typeof pages.$inferSelect;