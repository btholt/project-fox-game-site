module.exports = {
  siteMetadata: {
    title: "Project Fox Game",
    subtitle: "Making a game together",
    description:
      "A brief course where we use JavaScript, HTML, and CSS to make a digital pet staring our little fox friend.",
    keywords: [
      "javascript",
      "digital pet",
      "typescript",
      "frontend",
      "css",
      "html",
      "project",
      "pair coding"
    ]
  },
  pathPrefix: "/project-fox-game-site",
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    }
  ]
};
