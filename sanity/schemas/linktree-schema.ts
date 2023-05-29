const slugSource = (doc: { name: string; date: string }) => {
  if (doc.date !== undefined) {
    return doc.name + "-" + doc.date;
  } else {
    return doc.name;
  }
};

const linktree = {
  name: "linktree",
  title: "Link Tree",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
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
      name: "image",
      title: "Image",
      type: "image",
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          uri: { (arg0: { scheme: string[] }): any; new (): any };
        };
      }) => Rule.required().uri({ scheme: ["http", "https"] }),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "DD/MM/yyyy" },
    },
    {
      name: "accesscount",
      title: "Access Count",
      type: "number",
      readonly: true,
    },
  ],
  orderings: [
    {
      title: "Date",
      name: "sortbydate",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
};

export default linktree;
