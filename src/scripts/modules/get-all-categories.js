/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');

const { CATEGORIES_URL } = require('./environment');

const getAllCategories = async (query = '') => {
  try {
    const url = `${CATEGORIES_URL}?${query}`;
    const categories = await axios.get(url);
    return categories.data;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getAllCategories };
