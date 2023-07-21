import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";
import Logo from "@/components/studio/Logo";
import StudioNavbar from "@/components/studio/StudioNavbar";
import { myTheme } from "@/theme";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "o8yceytn",
  dataset: "production",
  title: "infivent",
  apiVersion: "2023-07-21",
  basePath: "/studio",
  plugins: [
    deskTool(),
    visionTool({
      defaultApiVersion: "v2021-10-21",
      defaultDataset: "production",
    }),
  ],
  studio: {
    components: {
      // logo: Logo,
      // navbar: StudioNavbar,
    },
  },
  schema: { types: schemas },
  theme: myTheme,
});

export default config;
