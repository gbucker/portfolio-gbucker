import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "p06bvv6p",
  dataset: "production",
  title: "Porfólio Gustavo Bucker",
  apiVersion: "2023-05-24",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
