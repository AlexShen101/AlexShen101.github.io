/** @type {import('next').NextConfig} */

const repo = 'v1-portfolio'
const basePath = `/${repo}`

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  output: "export"
}

module.exports = {
  nextConfig,
  basePath: basePath,
}