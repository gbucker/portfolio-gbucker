import GradientText from "@/app/components/GradientText";
import { urlFor } from "@/sanity/sanity-utils";
import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { ReactNode } from "react";
import Link from 'next/link';

// `components` object you'll pass to PortableText
export const components: PortableTextComponents = {
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
    link: ({value, children}: {children: ReactNode }) => {
      const target = (value.href)
      return(<Link href={target} className={`font-bold text-green-600 hover:text-gray-700 transition`}>{children}</Link>)},
    strong: ({children}: {children: ReactNode }) => <strong className="font-extrabold text-gray-700">{children}</strong>,
  },
  listItem: {
    bullet: ({children}) => <li className="mt-1 text-gray-700"><GradientText>➜ </GradientText>{children}</li>,
  },
  types: {
    image: ({value}) =><div className="flex items-center justify-left my-10"><Image
      src={urlFor(value).width(400).height(400).crop('focalpoint').quality(100).fit('max').url()}
      alt={value.alt}
      width={400}
      height={400}
      className="object-cover rounded-lg"
      /></div>
    ,
  },
}