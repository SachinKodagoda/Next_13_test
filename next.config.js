/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // modularizeImports: {
  //   'react-icons/hi2': {
  //     transform: 'react-icons/hi2/{{member}}',
  //   },
  // },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
