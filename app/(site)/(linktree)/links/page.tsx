"use client";
import GradientLink from '@/app/components/GradientLink';
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
      <LinkList links={links}/>
    </div>
  );
}

function LinkList({links}: {links: LinkType[]}) {
  return (
    <div className="max-w-xl">
      <h2 className="text-white text-xl md:text-2xl font-bold mt-10 mb-10">Links</h2>
      <div className="grid grid-col-1 gap-8">
      {links.map((link) => (
        <Link key={link._id} href={`${link.url}`}>
        <div className="bg-white flex items-bottom justify-left gap-10 border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-purple-500 transition">
          {link.image && (
            <Image
            src={urlFor(link.image).width(100).height(100).url()}
            alt={link.name}
            width={75}
            height={75}
            className="flex mr-3 object-cover rounded-lg border border-gray-500 shrink-0 min-w-75"
            />
          )}
          <div className="flex flex-col mt-2 mb-2 grow-0 text-gray-600"><h3 className="text-lg font-bold">{link.name}</h3><p className="text-lg">{link.date && `${moment(link.date).format("DD/MM/yyyy")}`}</p></div>
        </div>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default LinkTree;