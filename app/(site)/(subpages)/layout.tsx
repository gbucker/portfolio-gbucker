import "@/app/globals.css";
import { getPages } from "@/sanity/sanity-utils";
import Header from "../../components/Header";
import React from 'react';

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
      <body className="max-w-5xl mx-auto p-10 overflow-y-scroll">
        <main className=""><Header pages={pages} showNameHeader={true}/>
        {children}</main>
      </body>
    </html>
  );
}
