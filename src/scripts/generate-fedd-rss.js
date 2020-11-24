/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const prettier = require('prettier');

const { getAllPosts } = require('./modules/get-all-posts');
const { toRssXML } = require('./modules/to-rss-xml');

const generateFeedRss = async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.json');

  const posts = await getAllPosts();
  const xml = toRssXML(posts);

  const formatted = prettier.format(xml, {
    ...prettierConfig,
    parser: 'vue',
  });

  fs.writeFileSync('public/rss.xml', formatted);
};

generateFeedRss();
