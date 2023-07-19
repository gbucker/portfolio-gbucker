const slugSource = (doc: { title: string; publishedAt: string }) => {
  if (doc.publishedAt !== undefined) {
    return doc.title + "-" + doc.publishedAt.substring(0, 10);
  } else {
    return doc.title;
  }
};

const post = {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: slugSource,
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt", type: "string" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};

export default post;
