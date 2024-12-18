/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : "standalone",
  reactStrictMode: false,
  images: {
    unoptimized: process.env.CLOUDFLARE == 1 ? true : false, // Disable Image Optimization API
  },
  images: {
    // loader: process.env.CLOUDFLARE == 1 ? "custom" : "default",
    // loaderFile: "./components/partials/ImageLoader.jsx",
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_API_DOMAIN,
        port: "",
        pathname: `/**`,
      },
      {
        protocol: "https",
        hostname: "cpc-strapi-cms.onrender.com",
        port: "",
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
