/** @type {import('next').NextConfig} */

// add host images.unsplash.com
const nextConfig = {
   images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;


  