/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/merchant",
        destination: "/merchant/dashboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
