"use client";
import { getLinks, urlFor } from '@/sanity/sanity-utils';
import { LinkType } from '@/types/Link';
import moment from 'moment';
import Image from "next/image";
import Link from 'next/link';
import React from 'react';

async function LinkTree() {
  const links = await getLinks();

  return (
    <div>
      <Link href="/">
        <div className="text-white text-4xl md:text-5xl font-bold">Gustavo Bucker</div>
        <p className="pt-3 text-white md:text-2xl text-base">Acesse meu Portfólio</p>
      </Link>
      <div className="max-w-xl">
        <h2 className="text-white text-xl md:text-2xl font-bold mt-10 mb-10">Links</h2>
        <div className="grid grid-col-1 gap-8">
          {LinkList({links})}
        </div>
      </div>
    </div>
  );
}

function LinkList({links}: {links: LinkType[]}): JSX.Element[] {
  const isDateFuture = (link: any) => {
    if (link.date !== null) {
      let date1 = new Date(link.date).getTime();
      let date2 = new Date().getTime();
    
      return date1 >= date2;
    } else {
      return true;
    }
  };

  const futureLinks = links.filter(isDateFuture)
  futureLinks.sort(((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()))
  
  const LinkArray = futureLinks.map((link) => (
    <Link key={link._id} href={`${link.url}`}>
      <div className={`bg-white items-center flex gap-2 md:gap-10 border-2 border-gray-500 rounded-full p-1 h-[87px] hover:scale-105 hover:border-purple-500 transition`}>
        {link.image && (
          <Image
          src={urlFor(link.image).width(100).height(100).url()}
          alt={link.name}
          width={75}
          height={75}
          className="hidden min-[475px]:block absolute mr-3 object-cover rounded-full border border-gray-500 shrink-0 min-w-75"
          />
        )}
        <div className={`block w-[100%] grow-0 text-gray-600`}><h3 className="text-center sm:text-lg font-bold">{link.name}</h3><p className="text-center sm:text-lg">{link.date && `${moment(link.date).format("DD/MM/yyyy")}`}</p></div>
      </div>
      </Link>
  ));

  return LinkArray;
}


export default LinkTree;