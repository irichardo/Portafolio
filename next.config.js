/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  // webpack: (config) => {
  //   config.resolve.alias["@context"] = path.join(__dirname, "./context");
  //   return config;
  // },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://richardhd.com/',
          },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
  images: {
    domains: [
      'images.pexels.com',
      'i.imgur.com',
      'imgur.com',
      'github.com',
      'localhost',
    ],
    minimumCacheTTL: 60,
  },
  env: {
    TOKEN_GITHUB: process.env.TOKEN_GITHUB,
    MY_SECRET_TOKEN: process.env.MY_SECRET_TOKEN,
    SITE_URL: process.env.SITE_URL,
    MAIL_TOKEN: process.env.MAIL_TOKEN,
    URL_STRAPI_BLOG: process.env.URL_STRAPI_BLOG,
  },
};

module.exports = nextConfig;
