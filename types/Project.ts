import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  tags: Array<string>;
  image: string;
  urls: UrlObject[];
  content: PortableTextBlock[];
  date: Date;
};

export type UrlObject = {
  url: string;
};
