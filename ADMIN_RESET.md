# Admin Access Reset Guide

If you've forgotten your Payload admin password or can't access `/admin`, follow these steps:

## Option 1: Run Seed Script Locally (Recommended)

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Create `.env.local`** in the project root with your MongoDB connection:
   ```
   DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/payload-zvk
   PAYLOAD_SECRET=your-secret-key-change-this-in-production
   ```

3. **Run the seed script**:
   ```bash
   npm run seed
   ```

4. **You'll see**:
   ```
   ✅ Admin user ready!
   📧 Email: admin@zvk.de
   🔑 Password: Admin123!Zvk
   
   ⚠️  Please change this password after first login!
   🔗 Go to: https://payload-zvk.vercel.app/admin
   ```

5. **Login to admin** at `https://payload-zvk.vercel.app/admin`:
   - Email: `admin@zvk.de`
   - Password: `Admin123!Zvk`

6. **Change the password immediately**:
   - Click your email in top-right corner → Account
   - Change password to something secure

## Option 2: Reset via MongoDB Directly

If you prefer to reset the user in MongoDB directly:

```bash
# Connect to your MongoDB Atlas cluster
# Find the users collection
# Delete the old admin user or manually set a new password
```

Contact MongoDB Atlas support if you need help accessing your database.

## Option 3: Redeploy with Fresh Database

If you want a completely fresh start:

1. Create a new MongoDB Atlas cluster
2. Update `DATABASE_URI` in Vercel environment variables
3. Redeploy the application
4. Run the seed script again (or access will prompt you to create the first admin)

---

**Security Note**: The seed script creates a default admin user. This is only for initial setup. Always use a strong password after first login and manage access carefully.
