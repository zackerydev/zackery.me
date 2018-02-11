module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Zackery Griesinger's Portfolio", // Site title.
  siteTitleAlt: "Zackery Griesinger's Portfolio and Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://zackery.me", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Portfolio, blog and resume for Zackery Griesinger", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "494604480933335", // FB Application ID for using app insights
  googleAnalyticsID: "UA-96875884-1", // GA tracking ID.
  postDefaultCategoryID: "Web Development", // Default category for posts.
  userName: "Zackery Griesinger", // Username to display in the author segment.
  userTwitter: "zgriesinger", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Kansas City, Missouri", // User location to display in the author segment.
  userAvatar: "/avatar.png", // User avatar to display in the author segment.
  userDescription:
    "Web developer from Kansas City, problem solver and technology enthusiast", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/zgriesinger",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/zgriesinger",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:zgriesinger@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Zackery Griesinger", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "black" // Used for setting manifest background color.
};
