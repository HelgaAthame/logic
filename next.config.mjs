/** @type {import('next').NextConfig} */
const nextConfig = {  
  output: "export", 
  basePath: "/logic",
  images: {
    domains: ["localhost", "s3.logiclike.com"],
    unoptimized: true
  },
};

export default nextConfig;
