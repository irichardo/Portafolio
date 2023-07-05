/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com','i.imgur.com', 'imgur.com'],
    minimumCacheTTL: 60
  },
  env: {
    TOKEN_GITHUB: process.env.TOKEN_GITHUB,
    MY_SECRET_TOKEN:process.env.MY_SECRET_TOKEN
  }
}

module.exports = nextConfig;
