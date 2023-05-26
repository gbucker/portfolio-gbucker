import "@/app/globals.css";
import { getPages } from "@/sanity/sanity-utils";
import Header from "@/app/components/Header";
import React from 'react';

import FlickeringText from "../../components/FlickeringText";
import GradientText from "@/app/components/GradientText";
import Link from "next/link";

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
      <body className="max-w-5xl mx-auto py-10 overflow-y-scroll">
        <Header pages={pages} showNameHeader={false}/>
        <Name />
        <main className="">{children}</main>
      </body>
    </html>
  );
}


function Name() {
  return (
    <div>
      <Link href="/">
      <h1 className="text-7xl font-extrabold text-gray-800">Eu sou <GradientText>Gustavo Bucker</GradientText></h1></Link>
      <p className="mt-5 ml-1 text-xl text-gray-800">Audiovisual <FlickeringText/> Comédia</p>
    </div>
  );
}