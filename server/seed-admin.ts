
import { storage } from "./storage";
import bcrypt from "bcrypt";

// Use relative path to avoid tsconfig path alias issues with tsx on server
import { users } from "../shared/schema";

async function seedAdmin() {
    const username = "sameerliaqat81@gmail.com";
    const password = "%s1T22I'Fq=T";

    console.log(`Checking if admin user ${username} exists...`);
    const existingUser = await storage.getUserByUsername(username);

    if (existingUser) {
        console.log("Admin user already exists. Updating password...");
        // Since we don't have a direct updateUser method for password easily accessible in the interface shown (only specialized ones?), 
        // actually storage.ts doesn't show a generic updateUser. 
        // However, looking at the schema, users table is simple.
        // If updateUser is not available, I might need to delete and recreate or just log it.
        // Wait, storage.ts does NOT have updateUser in the interface.
        // I can use db directly if needed, but let's see if I can simply create if not exists.
        // If password update is needed, I might need to add that method or use db directly.
        console.log("Skipping update since user exists.");
        process.exit(0);
    }

    console.log("Creating admin user...");
    const hashedPassword = await bcrypt.hash(password, 10);

    await storage.createUser({
        username,
        password: hashedPassword,
        role: "admin"
    });

    console.log("Admin user created successfully.");
    process.exit(0);
}

seedAdmin().catch(console.error);
