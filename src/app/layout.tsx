export const metadata = {
  title: 'ZVK Steinmetz CMS',
  description: 'Payload CMS for ZVK Steinmetz',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
