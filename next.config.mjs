/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "out" : "standalone",
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // This prevents the site from being framed
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=()", // Customize the permissions as needed
          },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.discoveryhotels-resorts.com/;
              style-src 'self' 'unsafe-inline' https://www.discoveryhotels-resorts.com/;
              img-src 'self' data:;
              connect-src 'self' https://discoverysuites.haspcms.net;
              font-src 'self' https://fonts.gstatic.com;
              object-src 'none';
              frame-ancestors 'none';
              base-uri 'self';
              form-action 'self';
              upgrade-insecure-requests;
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // Customize as per your requirement
          },
          {
            key: "X-Robots-Tag",
            value: "",
          },
          {
            key: "Cache-control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Expires",
            value: new Date(Date.now() + 31536000000).toUTCString(),
          },
          {
            key: "Content-Security-Policy",
            value:
              "script-src-attr 'self' 'unsafe-inline'; style-src-attr 'self' 'unsafe-inline'; frame-ancestors 'self'",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=self",
          },
          {
            key: "X-xss-protection",
            value: "1; mode=block",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
