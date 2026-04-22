import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { de } from '@payloadcms/translations/languages/de';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import Users from './collections/users';
import Pages from './collections/pages';
import News from './collections/news';
import Team from './collections/team';
import Partners from './collections/partners';
import FAQ from './collections/faq';
import Settings from './collections/settings';

import HomeGlobal from './globals/home';
import BetriebeGlobal from './globals/betriebe';
import VersicherteGlobal from './globals/versicherte';
import RentnerGlobal from './globals/rentner';
import PflichtbeihilfeGlobal from './globals/pflichtbeihilfe';
import ZukunftsteinGlobal from './globals/zukunftstein';
import VergleichGlobal from './globals/vergleich';
import UeberUnsGlobal from './globals/ueber-uns';
import ServiceGlobal from './globals/service';
import MeldeportalGlobal from './globals/meldeportal';
import DownloadsGlobal from './globals/downloads';
import KontaktGlobal from './globals/kontakt';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  i18n: {
    fallbackLanguage: 'de',
    supportedLanguages: { de },
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Pages, News, Team, Partners, FAQ, Settings],
  globals: [
    HomeGlobal, BetriebeGlobal, VersicherteGlobal, RentnerGlobal,
    PflichtbeihilfeGlobal, ZukunftsteinGlobal, VergleichGlobal, UeberUnsGlobal,
    ServiceGlobal, MeldeportalGlobal, DownloadsGlobal, KontaktGlobal,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  cors: (process.env.CORS_ORIGINS || 'http://localhost:3000').split(','),
});
