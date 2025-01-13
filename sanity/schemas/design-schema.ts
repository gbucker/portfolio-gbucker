const design = {
    name: "design",
    title: "Design Projects",
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
        options: { source: "name" },
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: "tags",
        type: "array",
        validation: (Rule: { required: () => any }) => Rule.required(),
        of: [
          {
            type: "string",
            options: {
              list: [
                { title: "Web Design", value: "web" },
                { title: "Design Gráfico", value: "grafico" },
                { title: "Motion Graphics", value: "motion" },
              ],
            },
          },
        ],
        options: {
          layout: "list",
        },
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [{ name: "alt", title: "Alt", type: "string" }],
      },
      {
        title: "URLs",
        name: "urls",
        type: "array",
        of: [
          {
            name: "singleurl",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "url",
                type: "url",
                validation: (Rule: {
                  required: () => {
                    (): any;
                    new (): any;
                    uri: { (arg0: { scheme: string[] }): any; new (): any };
                  };
                }) => Rule.required().uri({ scheme: ["http", "https"] }),
              },
            ],
          },
        ],
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "date",
        title: "Date",
        type: "date",
        options: { dateFormat: "yyyy-MM" },
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
  
  export default design;
  