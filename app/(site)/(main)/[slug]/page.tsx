import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { Metadata } from 'next';
import { components } from '@/app/components/PTComponents';

type PageProps = {
  params: {slug: string}
}

export default async function Page({params}: PageProps) {
  const page = await getPage(params.slug);
  
  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="text-3xl md:text-4xl text-gray-800 mb-10">{page.title}</h3>
      <div className="bg-gray-100 rounded-xl p-5">
        <PortableText value={page.content} components={components}/>
      </div>
    </div>
  )
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const page = await getPage(params.slug);
 
  return {
    title: `${page.title} - Gustavo Bucker`,
  };
}