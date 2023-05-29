import "@/app/globals.css";
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Gustavo Bucker - Links",
  description: "Gustavo Bucker - acesse meus links",
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-br">
      <body className="max-w-xl mx-10 md:mx-auto py-10 bg-gradient-to-b bg-fixed from-green-500 via-gray-600 to-indigo-600 my-auto">
        <main className="">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
