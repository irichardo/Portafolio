/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:['images.pexels.com'],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
  env:{
    TOKEN_GITHUB: process.env.TOKEN_GITHUB
  } 
}

module.exports = nextConfig
