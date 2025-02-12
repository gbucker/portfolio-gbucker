import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { Design } from "@/types/Design";
import { LinkType } from "@/types/Link";

import { createClient } from "next-sanity";
import clientConfig from "./config/client-config";
import imageUrlBuilder from "@sanity/image-url";
import { groq } from "next-sanity";
import { Post } from "@/types/Post";

export async function getProjects(): Promise<Project[]> {
  const projects = await createClient(clientConfig).fetch(groq`
  *[_type == "project"] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    tags,
    "image": image.asset->url,
    urls,
    content,
    date
  }`);

  projects.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return projects;
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    tags,
    "image": image.asset->url,
    urls,
    content,
    date
  }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(groq`
  *[_type == "page"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content
  }`);
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`
  *[_type == "page"  && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content
  }`,
    { slug }
  );
}

export async function getLinks(): Promise<LinkType[]> {
  return createClient(clientConfig).fetch(groq`
  *[_type == "linktree"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    image,
    url,
    date,
    accesscount
  }`);
}

export async function getLink(slug: string): Promise<LinkType> {
  return createClient(clientConfig).fetch(
    groq`
  *[_type == "linktree"  && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    image,
    url,
    date,
    accesscount
  }`,
    { slug }
  );
}

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(groq`
  *[_type == "post"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    publishedAt,
    content
  }`);
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "post"  && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      publishedAt,
      content
    }`,
    { slug }
  );
}

export function urlFor(source: string) {
  const builder = imageUrlBuilder(createClient(clientConfig));
  return builder.image(source);
}

export async function getDesigns(): Promise<Design[]> {
  const designs = await createClient(clientConfig).fetch(groq`
  *[_type == "project"] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    tags,
    "image": image.asset->url,
    urls,
    content,
    date
  }`);

  designs.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return designs;
}

export async function getDesign(slug: string): Promise<Design> {
  return createClient(clientConfig).fetch(
    groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    tags,
    "image": image.asset->url,
    urls,
    content,
    date
  }`,
    { slug }
  );
}
