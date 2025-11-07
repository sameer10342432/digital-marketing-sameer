import { storage } from "./storage";
import bcrypt from "bcrypt";

async function createAdminUser() {
  const username = "sameerliaqat81@gmail.com";
  const password = "%s1T22I'Fq=T";
  
  try {
    const existingUser = await storage.getUserByUsername(username);
    
    if (existingUser) {
      console.log(`✅ Admin user ${username} already exists!`);
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    await storage.createUser({
      username,
      password: hashedPassword,
      role: "admin"
    });

    console.log(`✅ Admin user created successfully!`);
    console.log(`   Username: ${username}`);
    console.log(`   Password: ${password}`);
    console.log(`\n🔒 You can now login with these credentials.`);
  } catch (error) {
    console.error("❌ Error creating admin user:", error);
    process.exit(1);
  }
}

createAdminUser().then(() => {
  console.log("\n✨ Setup complete!");
  process.exit(0);
});
