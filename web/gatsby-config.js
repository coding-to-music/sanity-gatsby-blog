// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
  ],
};

// blog-with-gatsby-web: Hi from the Gatsby maintainers! Based on what we see in your site, these coming
// blog-with-gatsby-web: features may help you. All of these can be enabled within gatsby-config.js via
// blog-with-gatsby-web: flags (samples below)
// blog-with-gatsby-web: Preserve webpack's Cache (https://github.com/gatsbyjs/gatsby/discussions/28331),
// blog-with-gatsby-web:  which changes Gatsby's cache clearing behavior to not clear webpack's
// blog-with-gatsby-web: cache unless you run "gatsby clean" or delete the .cache folder manually.
// blog-with-gatsby-web: Here's how to try it:
// blog-with-gatsby-web: module.exports = {
// blog-with-gatsby-web:   flags: { PRESERVE_WEBPACK_CACHE: true },
// blog-with-gatsby-web:   plugins: [...]
// warn /mnt/ap/ap/sanity-gatsby-blog/web/src/pages/404.js
// blog-with-gatsby-web:   7:5  warning  Imported JSX component SEO must be in PascalCase
// blog-with-gatsby-web: react/jsx-pascal-case
// blog-with-gatsby-web: /mnt/ap/ap/sanity-gatsby-blog/web/src/pages/archive.js
// blog-with-gatsby-web:   52:7  warning  Imported JSX component SEO must be in PascalCase
// blog-with-gatsby-web: react/jsx-pascal-case
// blog-with-gatsby-web: /mnt/ap/ap/sanity-gatsby-blog/web/src/pages/index.js
// blog-with-gatsby-web:   93:7  warning  Imported JSX component SEO must be in PascalCase
// blog-with-gatsby-web: react/jsx-pascal-case
// blog-with-gatsby-web: /mnt/ap/ap/sanity-gatsby-blog/web/src/templates/blog-post.js
// blog-with-gatsby-web:   65:18  warning  Imported JSX component SEO must be in PascalCase
// blog-with-gatsby-web: react/jsx-pascal-case
// blog-with-gatsby-web:   67:9   warning  Imported JSX component SEO must be in PascalCase
// blog-with-gatsby-web: react/jsx-pascal-case
