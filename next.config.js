/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,

  async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.next-hub.pro' }],
      destination: 'https://next-hub.pro/:path*',
      permanent: true,
    },
    { source: '/:path+/', destination: '/:path+', permanent: true }, // no "/" loop
  ];
}
};

module.exports = nextConfig;
