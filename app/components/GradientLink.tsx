import React, { ReactNode } from 'react';
import Link from 'next/link';

type GradientLinkProps = {
  className?: string;
  href: string;
  children: ReactNode | undefined;
  key?: string;
}

export default function GradientLink(props: GradientLinkProps) {
    return (
      <Link key={props.key} href={props.href} className={`bg-gray-600 hover:bg-gradient-to-r from-green-400 via-gray-600 to-indigo-600 bg-clip-text text-transparent transition ${props.className}`}>{props.children}</Link>
    );
}