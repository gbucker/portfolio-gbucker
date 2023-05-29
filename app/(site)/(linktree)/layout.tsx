import "@/app/globals.css";
import { getPages } from "@/sanity/sanity-utils";
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Gustavo Bucker",
  description: "Portfólio de Gustavo Bucker",
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const pages = await getPages();

  return (
    <html lang="pt-br">
      <body className="max-w-xl mx-10 md:mx-auto py-10 bg-gradient-to-b bg-fixed from-green-500 via-gray-600 to-indigo-600 my-auto">
        <main className="">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
