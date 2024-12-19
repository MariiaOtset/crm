import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon.png"
      />
      <body>{children}</body>
    </html>
  );
}
