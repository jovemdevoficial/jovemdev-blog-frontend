/* eslint-disable @typescript-eslint/no-var-requires */
const { postsPerPage } = require('./environment');
const { countAllPosts } = require('./count-all-posts');

const createArrayWithNumberOfPosts = async (query = '') => {
  const numberOfPosts = Number(await countAllPosts(query));

  const numberOfPages = Math.ceil(numberOfPosts / postsPerPage);
  const arrayPages = [];

  for (let i = 1; i <= numberOfPages; i++) {
    arrayPages.push(String(i));
  }

  return arrayPages;
};

module.exports = { createArrayWithNumberOfPosts };
