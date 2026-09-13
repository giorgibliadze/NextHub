/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  skipTrailingSlashRedirect: true,

  async redirects() {
  return [
    {
      source: '/webDevelopmentEN/',
      destination: '/services/webDevelopmentEN',
      permanent: true,
    },
    {
      source: '/webDevelopmentEN',
      destination: '/services/webDevelopmentEN',
      permanent: true,
    },
    {
      source: '/webdevelopmenten/',
      destination: '/services/webDevelopmentEN',
      permanent: true,
    },
    {
      source: '/webdevelopmenten',
      destination: '/services/webDevelopmentEN',
      permanent: true,
    },
    { source: '/:path+/', destination: '/:path+', permanent: true }, // no "/" loop
  ];
}
};

module.exports = nextConfig;
