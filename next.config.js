/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,

  async redirects() {
  return [
    {
      source: '/webDevelopmentEN',
      destination: '/services/webDevelopmentEN',
      permanent: true,
    },
    {
      source: '/webdevelopmenten',
      destination: '/services/webDevelopmentEN',
      permanent: true,
    },
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
