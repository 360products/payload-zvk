import config from '@payload-config';
import { RootLayout } from '@payloadcms/next/layouts';
import { importMap } from './admin/importMap.js';
import React from 'react';

import '@payloadcms/next/css';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <RootLayout config={config} importMap={importMap}>
    {children}
  </RootLayout>
);

export default Layout;
