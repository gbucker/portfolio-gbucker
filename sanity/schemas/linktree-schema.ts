const linktree = {
  name: "linktree",
  title: "Link Tree",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc: { name: string; date: string }) =>
          doc.name + "-" + doc.date,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    { name: "url", title: "URL", type: "url" },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "DD/MM/yyyy" },
    },
  ],
};

export default linktree;
