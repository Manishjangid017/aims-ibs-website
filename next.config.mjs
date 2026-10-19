/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // local
    NEXT_PUBLIC_SITE_URL: 'https://aims-ibs-website.vercel.app',
    // production
    // NEXT_PUBLIC_SITE_URL: 'https://www.aimsibs.com',
    IMG_PATH: '/',
  },
};

export default nextConfig;
