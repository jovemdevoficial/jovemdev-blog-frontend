/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

dotenv.config();

const API_URL = process.env.API_URL;
const POST_URL = `${API_URL}/posts`;
const CATEGORIES_URL = `${API_URL}/categories`;
const TAGS_URL = `${API_URL}/tags`;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const AUTHORS_URL = `${API_URL}/authors`;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
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
