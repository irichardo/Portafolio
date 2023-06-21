/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    TOKEN_GITHUB: process.env.TOKEN_GITHUB
  } 
}

module.exports = nextConfig
