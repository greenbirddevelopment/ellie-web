/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  videos: {
    autoPlay: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ellie-web.s3.amazonaws.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
