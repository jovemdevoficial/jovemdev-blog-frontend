/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');

const { POST_URL } = require('./environment');

const getAllPosts = async (query = '') => {
  try {
    const url = `${POST_URL}?${query}`;
    const posts = await axios.get(url);
    return posts.data;
  } catch (e) {
    console.log(e);
  }
};

getAllPosts();

module.exports = { getAllPosts };
