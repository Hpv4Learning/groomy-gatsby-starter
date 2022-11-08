import type { GatsbyConfig } from "gatsby";
import { config as dotenv } from "dotenv";

dotenv({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Groomy`,
    siteUrl:
      process.env.NODE_ENV === "production"
        ? `https://groomygatsby.gatsbyjs.io/`
        : "http://localhost:8000/",
    description:
      "Impara dai migliori chef italiani ricette orientali, funzionali ed estive",
    author: "@hpv4learning",
    image: "/logo.png",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        "projectId": process.env.GATSBY_SANITY_PROJECT_ID,
        "dataset": process.env.GATSBY_SANITY_DATASET,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "images",
        "path": "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "pages",
        "path": "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
