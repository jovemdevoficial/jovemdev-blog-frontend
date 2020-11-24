/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');

const { AUTHORS_URL } = require('./environment');

const getAllAuthors = async (query = '') => {
  try {
    const url = `${AUTHORS_URL}?${query}`;
    const authors = await axios.get(url);
    return authors.data;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getAllAuthors };
