import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: "Porfólio Gustavo Bucker",
  apiVersion: "2023-05-24",
  basePath: "/admin",
  plugins: [deskTool(), visionTool(), media()],
  schema: { types: schemas },
});

export default config;
