"use client"
import { Page } from '@/types/Page';
import Link from 'next/link';
import React from 'react';
import GradientText from './GradientText';
import { usePathname } from 'next/navigation';


function Header({ pages, showNameHeader }: { pages: Page[], showNameHeader: boolean}) {

  const pathname = usePathname();

  return (
    <header className={`flex items-bottom pb-10 ${showNameHeader ? 'justify-between': 'justify-end'}`}>
      {showNameHeader && <><NameHeader /><PagesList pages={pages} pathname={pathname}/></>}
      {!showNameHeader && <><PagesList pages={pages} pathname={pathname}/></>}
    </header>
  );
}

function NameHeader() {
  return (
    <Link href="/"><GradientText className="text-2xl font-bold">Gustavo Bucker</ GradientText></Link>
  );
}

function PagesList({ pages, pathname }: { pages: Page[], pathname: string}) {
    const newPages = [...pages];
    // gambiarra pra colocar projetos na barra
    const projetos: Page = {
      _id: '1',
      _createdAt: undefined,
      title: 'Projetos',
      slug: '',
      content: pages[0].content,
    }

    newPages.unshift(projetos);

  return (
    <div className="flex items-bottom gap-5 text-xl">
      {newPages.map((page, index) => ((pathname == "/"+page.slug  || (index === 0 && pathname.includes('projetos'))?
      <Link key={page._id} href={`/${page.slug}`} className={`bg-gray-600 hover:bg-gradient-to-r from-green-400 via-gray-600 to-purple-600 bg-clip-text text-transparent font-bold transition`}><GradientText>{page.title}</GradientText></Link> : <Link key={page._id} href={`/${page.slug}`} className={`bg-gray-600 hover:bg-gradient-to-r from-green-400 via-gray-600 to-purple-600 bg-clip-text text-transparent font-bold transition`}>{page.title}</Link>)
      ))}
    </div>
  );
}

export default Header;