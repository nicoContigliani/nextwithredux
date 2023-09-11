/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_API_URI: process.env.NEXT_PUBLIC_API_URI,
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    NEXT_PUBLIC_CLIENT_SECRET: process.NEXT_PUBLIC_CLIENT_SECRET,
  },
}

module.exports = nextConfig
