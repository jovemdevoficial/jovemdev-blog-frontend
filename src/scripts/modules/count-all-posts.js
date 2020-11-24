/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');

const { POST_URL } = require('./environment');

const countAllPosts = async (query = '') => {
  try {
    const url = `${POST_URL}/count?${query}`;
    const numberOfPosts = await axios.get(url);
    return numberOfPosts.data;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { countAllPosts };
