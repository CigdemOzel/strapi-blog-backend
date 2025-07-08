module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: ["https://blog-project-bice-iota.vercel.app"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      headers: "*",
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
