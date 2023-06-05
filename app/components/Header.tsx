"use client"
import { Page } from '@/types/Page';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import GradientText from './GradientText';
import { usePathname } from 'next/navigation';
import GradientLink from './GradientLink';
import NameHeaderSmall from './NameHeaderSmall';

import '@/app/components/Header.css'

function Header({ pages, showNameHeader }: { pages: Page[], showNameHeader: boolean}) {

  const pathname = usePathname();

  return (
    <header className={`flex items-bottom pb-10 ${showNameHeader ? 'justify-between': 'justify-end'}`}>
      {showNameHeader && <><NameHeaderSmall /><PagesList pages={pages} pathname={pathname}/></>}
      {!showNameHeader && <><PagesList pages={pages} pathname={pathname}/></>}
    </header>
  );
}

function PagesList({ pages, pathname }: { pages: Page[], pathname: string}) {
    const newPages = [...pages];
    // gambiarra pra colocar projetos na barra
    const projetos: Page = {
      _id: '1',
      _createdAt: undefined,
      title: 'Portfólio',
      slug: '',
      content: newPages[0].content,
    }

    newPages.unshift(projetos);

    const children = newPages.map((page, index) => ((pathname == "/"+page.slug  || (index === 0 && pathname.includes('projetos'))?
    <li key={page._id}><Link href={`/${page.slug}`}><GradientText className="font-bold list-none block">{page.title}</GradientText></Link></li> : <li key={page._id}><GradientLink href={`/${page.slug}`} className="font-bold list-none block">{page.title}</GradientLink></li>)))

  return (
    <>
      <PagesListXl className="hidden md:flex">{children}</PagesListXl>
      <PagesListMobile className="flex flex-col md:hidden">{children}</PagesListMobile>
    </>
  );
}

function PagesListXl({children, className}: { children:ReactNode, className?: string}) {
  return (
    <div className={`items-bottom text-md md:text-xl ${className}`}>
      <ul className="flex justify-between gap-2 md:gap-5">{children}</ul>
    </div>
  )
}

function PagesListMobile({ children, className }: { children: ReactNode, className?: string }) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className={`flex flex-col items-end justify-end ${className}`}>
      <div
        className={`HAMBURGER-ICON space-y-1 ${isNavOpen ? 'active' : ''}`}
        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
      >
        <span className={`block h-0.5 w-8 bg-gray-600 transition-transform duration-300 ${isNavOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
        <span className={`block h-0.5 w-8 bg-gray-600 transition-opacity duration-300 ${isNavOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block h-0.5 w-8 bg-gray-600 transition-transform duration-300 ${isNavOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </div>

      <div className={`menu-wrapper pt-5 ${isNavOpen ? 'open' : ''}`}>
        <ul className={`MENU-LINK-MOBILE-OPEN flex flex-col items-end justify-between gap-2 ${isNavOpen ? 'show' : ''}`}>
          {children}
        </ul>
      </div>
    </div>
  );
}




export default Header;