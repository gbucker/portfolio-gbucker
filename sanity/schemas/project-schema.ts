const project = {
  name: "project",
  title: "Projects",
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
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Roteiro", value: "roteiro" },
              { title: "Direção", value: "direcao" },
              { title: "Atuação", value: "atuacao" },
              { title: "Stand-Up", value: "standup" },
              { title: "Edição", value: "edicao" },
              { title: "Produção", value: "producao" },
              { title: "Improviso", value: "improviso" },
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
};

export default project;
