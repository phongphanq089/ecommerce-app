/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ninetheme.com',
        port: '',
        pathname: '/themes/**',
      },
    ],
  },
};

export default nextConfig;
