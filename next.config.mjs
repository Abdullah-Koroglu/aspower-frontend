/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     remotePatterns: [
      {
         // protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
      },
      {
         protocol: "http",
        hostname: "185.250.210.23",
        port: "1338",
      },
    ],
  },
};

export default nextConfig;
