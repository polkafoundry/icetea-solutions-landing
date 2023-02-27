/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        child_process: false,
        net: false,
        tls: false,
        fs: false,
        path: false,

      }
    }
    return config
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_PRIVATE_KEY: process?.env?.NEXT_PUBLIC_PRIVATE_KEY,
    NEXT_PUBLIC_CLIENT_EMAIL: process?.env?.NEXT_PUBLIC_CLIENT_EMAIL,
    NEXT_PUBLIC_SHEET_ID: process?.env?.NEXT_PUBLIC_SHEET_ID
  }
}

module.exports = nextConfig
