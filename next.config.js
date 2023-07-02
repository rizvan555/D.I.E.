/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// --- Next.js-de resim endrimek ücün istifade olunur ---
module.exports = {
  // images: {
  //   domains: ["issing.digitale-theke.com"],
  // },
  images: {
    domains: ["localhost"],
  },
};
