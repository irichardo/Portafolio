/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com','i.imgur.com', 'imgur.com'],
    minimumCacheTTL: 60
  },
  env: {
    TOKEN_GITHUB: process.env.TOKEN_GITHUB
  }
}

module.exports = nextConfig;
