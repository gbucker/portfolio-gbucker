import GradientText from "@/app/components/GradientText";
import { getPage, urlFor } from "@/sanity/sanity-utils";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { stringify } from "querystring";

type PageProps = {
  params: {slug: string}
}

export default async function Page({params}: PageProps) {
  const page = await getPage(params.slug);
  
  // `components` object you'll pass to PortableText
  const components: PortableTextComponents = {
    block: {
      // @ts-expect-error
      h1: ({children}: {children: ReactNode }) => <h1 className="text-4xl font-bold mt-10 mb-5"><GradientText>{children}</GradientText></h1>,
      // @ts-expect-error
      h2: ({children}: {children: ReactNode }) => <h2 className="text-3xl font-bold mt-10 mb-5"><GradientText>{children}</GradientText></h2>,
      // @ts-expect-error
      h3: ({children}: {children: ReactNode }) => <h3 className="text-2xl font-bold mt-10 mb-5"><GradientText>{children}</GradientText></h3>,
      // @ts-expect-error
      h4: ({children}: {children: ReactNode }) => <h4 className="text-xl font-bold mt-10 mb-5"><GradientText>{children}</GradientText></h4>,
      // @ts-expect-error
      h5: ({children}: {children: ReactNode }) => <h5 className="text-lg font-bold mt-10 mb-5"><GradientText>{children}</GradientText></h5>,
      // @ts-expect-error
      h6: ({children}: {children: ReactNode }) => <h6 className="text-base font-bold mt-10 mb-5"><GradientText>{children}</GradientText></h6>,
      // @ts-expect-error
      normal: ({children}: {children: ReactNode }) => <p className="text-gray-700 mt-2">{children}</p>,
    },
    marks: {
      // @ts-expect-error
      link: Link,
      strong: ({children}: {children: ReactNode }) => <strong className="font-bold text-gray-600">{children}</strong>,
    },
    listItem: {
      bullet: ({children}) => <li className="mt-1 text-gray-700"><GradientText>➜ </GradientText>{children}</li>,
    },
    types: {
      image: ({value}) =><div className="flex items-center justify-left my-10"><Image
        src={urlFor(value).width(400).height(400).url()}
        alt={value.alt}
        width={400}
        height={400}
        className="object-cover rounded-lg"
        /></div>
      ,
    },
  }

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h3 className="text-4xl font-extrabold text-gray-800 mb-10">{page.title}</h3>
      <PortableText value={page.content} components={components}/>
    </div>
  )
}