/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images');

module.exports = withImages({
  trailingSlash: true,

  fileExtensions: ['jpg', 'jpeg', 'png', 'svg', 'gif', 'ico', 'webp', 'jp2'],

  webpack: (config) => {
    return config;
  },

  esModule: true,

  images: {
    domains: ['res.cloudinary.com'],
  },
});
