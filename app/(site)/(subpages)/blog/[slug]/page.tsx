import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { components } from '@/app/components/PTComponents';
import moment from "moment";
import Link from "next/link";

type PostProps = {
  params: {slug: string}
}

export default async function Post({params}: PostProps) {
  const slug = params.slug;
  const post = await getPost(slug);

  return (
  <div className="">
    <div className="flex flex-col items-bottom justify-left gap-5 mb-10">
      <p className="text-4xl font-extrabold text-gray-700">{post.title}</p>
      <p className="">{moment(post.publishedAt).format("DD/MM/yyyy")}</p>
    </div>
      <div className="text-lg text-gray-700 my-5 bg-white border border-gray-700 p-5">
        {post.content && <div className=""><PortableText value={post.content} components={components}/></div>}
      </div>
    <Link className="font-bold text-gray-700" href="/blog">Voltar</Link>
  </div>
  )
}

export async function generateMetadata(
  { params }: PostProps
): Promise<Metadata> {
  const page = await getPost(params.slug);
 
  return {
    title: `${page.title} - Gustavo Bucker`,
  };
}