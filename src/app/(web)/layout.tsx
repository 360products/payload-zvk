import '@/styles/tokens.css';
import '@/styles/shell.css';
import '@/styles/home.css';
import '@/styles/pages.css';

import NavWrapper from '@/components/NavWrapper';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ZVK Steinmetz',
  description: 'Zusatzversorgungskasse des Steinmetz- und Steinbildhauerhandwerks VVaG',
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,500;8..60,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, background: 'var(--zvk-bg)' }}>
        <NavWrapper />
        <div style={{ minHeight: '60vh' }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
