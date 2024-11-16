/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    output: "export", 
    basePath: "/logic",
    domains: ["localhost", "s3.logiclike.com"],
    unoptimized: true
  },
};

export default nextConfig;
