import { type User, type InsertUser, type Blog, type InsertBlog, type Portfolio, type InsertPortfolio, type Service, type InsertService, type Subscription, type InsertSubscription, type Contact, type InsertContact, users, blogs, portfolios, services, subscriptions, contacts } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllBlogs(): Promise<Blog[]>;
  getBlogById(id: number): Promise<Blog | undefined>;
  getBlogBySlug(slug: string): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
  updateBlog(id: number, blog: Partial<InsertBlog>): Promise<Blog | undefined>;
  deleteBlog(id: number): Promise<boolean>;

  getAllPortfolios(): Promise<Portfolio[]>;
  getPortfolioById(id: number): Promise<Portfolio | undefined>;
  createPortfolio(portfolio: InsertPortfolio): Promise<Portfolio>;
  updatePortfolio(id: number, portfolio: Partial<InsertPortfolio>): Promise<Portfolio | undefined>;
  deletePortfolio(id: number): Promise<boolean>;

  getAllServices(): Promise<Service[]>;
  getServiceById(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: number, service: Partial<InsertService>): Promise<Service | undefined>;
  deleteService(id: number): Promise<boolean>;

  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
  getSubscriptionByEmail(email: string): Promise<Subscription | undefined>;
  getAllSubscriptions(): Promise<Subscription[]>;

  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  getContactById(id: number): Promise<Contact | undefined>;
  updateContactStatus(id: number, status: string): Promise<Contact | undefined>;
  deleteContact(id: number): Promise<boolean>;
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    return db.query.users.findFirst({ where: eq(users.id, id) });
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return db.query.users.findFirst({ where: eq(users.username, username) });
  }

  async createUser(user: InsertUser): Promise<User> {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  }

  async getAllBlogs(): Promise<Blog[]> {
    return db.query.blogs.findMany({ orderBy: [desc(blogs.createdAt)] });
  }

  async getBlogById(id: number): Promise<Blog | undefined> {
    return db.query.blogs.findFirst({ where: eq(blogs.id, id) });
  }

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    return db.query.blogs.findFirst({ where: eq(blogs.slug, slug) });
  }

  async createBlog(blog: InsertBlog): Promise<Blog> {
    const [newBlog] = await db.insert(blogs).values(blog).returning();
    return newBlog;
  }

  async updateBlog(id: number, blog: Partial<InsertBlog>): Promise<Blog | undefined> {
    const [updatedBlog] = await db.update(blogs).set(blog).where(eq(blogs.id, id)).returning();
    return updatedBlog;
  }

  async deleteBlog(id: number): Promise<boolean> {
    const result = await db.delete(blogs).where(eq(blogs.id, id));
    return result.rowCount > 0;
  }

  async getAllPortfolios(): Promise<Portfolio[]> {
    return db.query.portfolios.findMany({ orderBy: [desc(portfolios.createdAt)] });
  }

  async getPortfolioById(id: number): Promise<Portfolio | undefined> {
    return db.query.portfolios.findFirst({ where: eq(portfolios.id, id) });
  }

  async createPortfolio(portfolio: InsertPortfolio): Promise<Portfolio> {
    const [newPortfolio] = await db.insert(portfolios).values(portfolio).returning();
    return newPortfolio;
  }

  async updatePortfolio(id: number, portfolio: Partial<InsertPortfolio>): Promise<Portfolio | undefined> {
    const [updatedPortfolio] = await db.update(portfolios).set(portfolio).where(eq(portfolios.id, id)).returning();
    return updatedPortfolio;
  }

  async deletePortfolio(id: number): Promise<boolean> {
    const result = await db.delete(portfolios).where(eq(portfolios.id, id));
    return result.rowCount > 0;
  }

  async getAllServices(): Promise<Service[]> {
    const allServices = await db.query.services.findMany({ orderBy: [desc(services.createdAt)] });
    return allServices.map(service => ({
      ...service,
      features: JSON.parse(service.features || '[]')
    })) as Service[];
  }

  async getServiceById(id: number): Promise<Service | undefined> {
    const service = await db.query.services.findFirst({ where: eq(services.id, id) });
    if (!service) return undefined;
    return {
      ...service,
      features: JSON.parse(service.features || '[]')
    } as Service;
  }

  async createService(service: InsertService): Promise<Service> {
    const serviceData = {
      ...service,
      features: JSON.stringify(service.features || [])
    };
    const [newService] = await db.insert(services).values(serviceData as any).returning();
    return {
      ...newService,
      features: JSON.parse(newService.features || '[]')
    } as Service;
  }

  async updateService(id: number, service: Partial<InsertService>): Promise<Service | undefined> {
    const serviceData = service.features
      ? { ...service, features: JSON.stringify(service.features) }
      : service;
    const [updatedService] = await db.update(services).set(serviceData as any).where(eq(services.id, id)).returning();
    if (!updatedService) return undefined;
    return {
      ...updatedService,
      features: JSON.parse(updatedService.features || '[]')
    } as Service;
  }

  async deleteService(id: number): Promise<boolean> {
    const result = await db.delete(services).where(eq(services.id, id));
    return result.rowCount > 0;
  }

  async createSubscription(subscription: InsertSubscription): Promise<Subscription> {
    const [newSubscription] = await db.insert(subscriptions).values(subscription).returning();
    return newSubscription;
  }

  async getSubscriptionByEmail(email: string): Promise<Subscription | undefined> {
    return db.query.subscriptions.findFirst({ where: eq(subscriptions.email, email) });
  }

  async getAllSubscriptions(): Promise<Subscription[]> {
    return db.query.subscriptions.findMany({ orderBy: [desc(subscriptions.createdAt)] });
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return db.query.contacts.findMany({ orderBy: [desc(contacts.createdAt)] });
  }

  async getContactById(id: number): Promise<Contact | undefined> {
    return db.query.contacts.findFirst({ where: eq(contacts.id, id) });
  }

  async updateContactStatus(id: number, status: string): Promise<Contact | undefined> {
    const [updatedContact] = await db.update(contacts).set({ status }).where(eq(contacts.id, id)).returning();
    return updatedContact;
  }

  async deleteContact(id: number): Promise<boolean> {
    const result = await db.delete(contacts).where(eq(contacts.id, id));
    return result.rowCount > 0;
  }
}

export const storage = new DbStorage();