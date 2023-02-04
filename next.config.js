/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //cloudinary'i ekle
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
