/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');
// const path = require('path');

dotenv.config();

const API_URL = process.env.API_URL;
const POST_URL = `${API_URL}/posts`;
const CATEGORIES_URL = `${API_URL}/categories`;
const TAGS_URL = `${API_URL}/tags`;
const SITE_URL = 'https://jovemdev.com';
const AUTHORS_URL = `${API_URL}/authors`;
const SITE_NAME = 'Jovem Dev';
const postsPerPage = 6;

module.exports = {
  POST_URL,
  SITE_URL,
  TAGS_URL,
  AUTHORS_URL,
  SITE_NAME,
  CATEGORIES_URL,
  postsPerPage,
};
