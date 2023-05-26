const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
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
    { name: "url", title: "URL", type: "url" },
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
