import path from 'path';
import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import Pages from './collections/pages';
import News from './collections/news';
import Team from './collections/team';
import Partners from './collections/partners';
import FAQ from './collections/faq';
import Settings from './collections/settings';

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    Pages,
    News,
    Team,
    Partners,
    FAQ,
    Settings,
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost/payload-zvk',
  }),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-in-production',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  cors: [
    process.env.CORS_ORIGINS || 'http://localhost:3000',
    'https://*.netlify.app',
  ].filter(Boolean),
  routes: {
    api: '/api',
  },
});
