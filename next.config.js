// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
  trailingSlash: true,

  async headers() {
    return [{ source: '/(.*)', headers: createSecureHeaders() }];
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
