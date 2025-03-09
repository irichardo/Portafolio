/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  // webpack: (config) => {
  //   config.resolve.alias["@context"] = path.join(__dirname, "./context");
  //   return config;
  // },
  images: {
    domains: ['images.pexels.com', 'i.imgur.com', 'imgur.com', 'github.com'],
    minimumCacheTTL: 60,
  },
  env: {
    TOKEN_GITHUB: process.env.TOKEN_GITHUB,
    MY_SECRET_TOKEN: process.env.MY_SECRET_TOKEN,
    SITE_URL: process.env.SITE_URL,
    MAIL_TOKEN: process.env.MAIL_TOKEN,
  },
};

module.exports = nextConfig;
