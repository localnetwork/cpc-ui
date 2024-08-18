/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "out" : "standalone",
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_API_DOMAIN,
        port: "",
        pathname: `/**`,
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: `/**`,
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: `/**`,
      },
    ],
  },
};

export default nextConfig;
