/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // For aspower.com.tr over HTTPS
        protocol: "https",
        hostname: "aspower.com.tr",
        // No need to specify port for HTTPS (default port is 443)
      },
    ],
  },
};

export default nextConfig;
