import React from 'react'; // Ensure React is imported
import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name='description' content='My App is a...' />
        <link rel='icon' href='/vite.svg' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* Note: The <html> tag should not be inside <Head>. */}
      </Head>
      {children}
    </>
  );
}
