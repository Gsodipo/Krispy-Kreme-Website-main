/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Change 'export' to 'standalone' if you are using Next.js 12 or newer
  reactStrictMode: true,
  basePath: '/Krispy-Kreme-Website', // Add this line with your repository name
  assetPrefix: '/Krispy-Kreme-Website/', // Add this line with your repository name
};

module.exports = nextConfig;
