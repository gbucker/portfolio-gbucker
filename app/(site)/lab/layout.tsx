import "@/app/globals.css";
import React from 'react';
import { getPages } from "@/sanity/sanity-utils";
import Header from "@/app/components/Header";
import NameHeader from "@/app/components/NameHeader";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Laboratório Perigoso de Comédia com Gustavo Bucker",
  description: "Laboratório Perigoso de Comédia",
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const pages = await getPages();

  return (
    <html lang="pt-br">
      <body className="bg-gray-100">
        <div className="max-w-5xl mx-auto pt-10 px-10 xl:p-0 xl:pt-10 overflow-x-auto">
        <Header pages={pages} showNameHeader={false}/>
        </div>
        <main className="">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}