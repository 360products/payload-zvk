import { getPayload } from 'payload';
import config from '../src/payload.config.js';

async function seed() {
  try {
    const payload = await getPayload({ config });

    console.log('Creating admin user...');

    const adminEmail = 'admin@zvk.de';
    const adminPassword = 'Admin123!Zvk';

    const existingUser = await payload.find({
      collection: 'users',
      where: {
        email: { equals: adminEmail },
      },
    });

    if (existingUser.docs.length > 0) {
      console.log('Admin user already exists. Updating password...');
      await payload.update({
        collection: 'users',
        id: existingUser.docs[0].id,
        data: {
          password: adminPassword,
        },
      });
    } else {
      await payload.create({
        collection: 'users',
        data: {
          email: adminEmail,
          password: adminPassword,
        },
      });
    }

    console.log(`✅ Admin user ready!`);
    console.log(`📧 Email: ${adminEmail}`);
    console.log(`🔑 Password: ${adminPassword}`);
    console.log(`\n⚠️  Please change this password after first login!`);
    console.log(`🔗 Go to: https://payload-zvk.vercel.app/admin`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

seed();
