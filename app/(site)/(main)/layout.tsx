import "@/app/globals.css";
import React from 'react';
import { getPages } from "@/sanity/sanity-utils";
import Header from "@/app/components/Header";
import NameHeader from "@/app/components/NameHeader";
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
      <body className="max-w-5xl mx-auto xl:py-10 p-10 xl:p-0 overflow-y-scroll overflow-x-auto">
        <Header pages={pages} showNameHeader={false}/>
        <NameHeader />
        <main className="">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}