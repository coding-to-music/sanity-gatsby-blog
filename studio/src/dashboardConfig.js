export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6194c514c045aae4645211ee",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-s6cyg9nt",
                  apiId: "c356b354-8bb4-4b62-8f00-86a2def85980",
                },
                {
                  buildHookId: "6194c51454831419d7f6400d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-fcmdnzgb",
                  apiId: "2895f497-05ac-4b99-80e4-df45e7a3f932",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/coding-to-music/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-fcmdnzgb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
    {
      name: "document-list",
      options: {
        title: "Exhibits",
        order: "_createdAt desc",
        types: ["exhibit"],
      },
      layout: { width: "medium" },
    },
  ],
};
