/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "i.imgur.com",
          protocol: "https",
        },
        {
          hostname: "cdn.sanity.io",
          protocol: "https",
        },
      ],
    },
  }
  
  export default nextConfig;
  