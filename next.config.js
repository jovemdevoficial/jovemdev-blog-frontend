/* eslint-disable @typescript-eslint/no-var-requires */
const { createSecureHeaders } = require('next-secure-headers');
const withImages = require('next-images');

module.exports = withImages({
  trailingSlash: true,

  async headers() {
    return [{ source: '/(.*)', headers: createSecureHeaders() }];
  },

  fileExtensions: ['jpg', 'jpeg', 'png', 'svg', 'gif', 'ico', 'webp', 'jp2'],

  webpack: (config) => {
    return config;
  },

  esModule: true,

  images: {
    domains: ['res.cloudinary.com'],
  },
});
