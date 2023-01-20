import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import logo from "./components/logo";
import { getDefaultDocumentNode } from "./structure";

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;

export default defineConfig({
  basePath: "/studio",
  name: "Njomo_Content_Studio",
  title: "Njomo Content Studio",
  projectId,
  dataset,
  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode 
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
});
