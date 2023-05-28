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
      <body className="max-w-xl mx-[max(10vw,12px)] py-10 overflow-y-scroll bg-gradient-to-b bg-fixed from-green-500 via-gray-600 to-indigo-600 my-auto">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
