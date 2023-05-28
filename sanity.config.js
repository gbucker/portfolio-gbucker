import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "p06bvv6p",
  dataset: "production",
  title: "Porfólio Gustavo Bucker",
  apiVersion: "2023-05-24",
  basePath: "/admin",
  plugins: [deskTool(), visionTool(), media()],
  schema: { types: schemas },
});

export default config;
