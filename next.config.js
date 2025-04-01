/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "slav-portfolio-s3.s3.eu-west-2.amazonaws.com",
    //   },
    // ],
  },
};

module.exports = nextConfig;
