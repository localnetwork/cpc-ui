const siteUrl = "https://cordova-public-college.vercel.app";
module.exports = {
  changefreq: "daily",
  generateRobotsTxt: true,
  siteUrl,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/preview"],
      },
    ],
  },
  exclude: ["/preview"],
};
