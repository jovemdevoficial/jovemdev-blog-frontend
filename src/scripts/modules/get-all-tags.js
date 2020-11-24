/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');

const { TAGS_URL } = require('./environment');

const getAllTags = async (query = '') => {
  try {
    const url = `${TAGS_URL}?${query}`;
    const tags = await axios.get(url);
    return tags.data;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getAllTags };
