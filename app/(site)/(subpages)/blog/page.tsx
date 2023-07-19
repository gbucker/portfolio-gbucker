import GradientLink from "@/app/components/GradientLink";
import { components } from "@/app/components/PTComponents";
import { getPosts } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import moment from "moment";

// type BlogProps = {
//   params: {blog: string}
// }

export default async function Blog() {
  const posts = await getPosts();

  
  
  const postsElements = posts.map((post, index) => (
    <div key={index} className="flex flex-col md:flex-row justify-between">
      <div className="min-w-[10%] md:mx-5">
        <p className="text-4xl font-extrabold text-gray-700"><GradientLink href={`/blog/${post.slug}`}>{post.title}</GradientLink></p>
        <p className="my-5 md:mt-10">{moment(post.publishedAt).format("DD/MM/yyyy")}</p>
      </div>
      <div className="md:max-w-[80%] text-lg text-gray-700 bg-white border border-gray-700 p-5">
      {post.content && <div className=""><PortableText value={post.content} components={components}/></div>}
      </div>
    </div>
  ));
  return(
  <div className="flex flex-col items-bottom justify-left gap-10">
    {postsElements}
  </div>);
}

export async function generateMetadata() {
  return {
    title: `Blog - Gustavo Bucker`,
  };
}