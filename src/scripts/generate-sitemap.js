/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const { getAllPosts } = require('./modules/get-all-posts');
const { getAllCategories } = require('./modules/get-all-categories');
const { getAllTags } = require('./modules/get-all-tags');
const { getAllAuthors } = require('./modules/get-all-authors');
const {
  createArrayWithNumberOfPosts,
} = require('./modules/create-array-with-number-of-posts');

const { SITE_URL } = require('./modules/environment');

const generateSiteMap = async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.json');

  // Estático
  const pages = await globby([
    'src/pages/*{.tsx,.mdx}',
    '!src/pages/_*.tsx',
    '!src/pages/api',
  ]);

  let sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('src/', '')
            .replace('pages', '')
            .replace('.tsx', '')
            .replace('.mdx', '');

          const route = path === '/index' ? '' : path;

          return `
          <url>
            <loc>${SITE_URL}${route}/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.7</priority>
          </url>
        `;
        })
        .join('')}
  `;

  //Dinamic Post

  // POSTS
  const posts = await getAllPosts();

  sitemap += `
  ${posts
    .map((post) => {
      return `
        <url>
          <loc>${`${SITE_URL}/posts/${post.slug}/`}</loc>
          <lastmod>${post.published_at}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
    `;
    })
    .join('')}
  `;

  // PAGES

  const arrayPages = await createArrayWithNumberOfPosts();

  sitemap += `
    ${arrayPages
      .map((number) => {
        return `
        <url>
          <loc>${`${SITE_URL}/posts/page/${number}/`}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `;
      })
      .join('')}

  `;

  // CATEGORIES

  const categories = await getAllCategories();

  for (let category of categories) {
    const urlQueryCategory = `category.slug_contains=${category.slug}`;
    const numberOfPageCategoryArray = await createArrayWithNumberOfPosts(
      urlQueryCategory,
    );

    for (let numberOfPageCategory of numberOfPageCategoryArray) {
      sitemap += `
        <url>
          <loc>${SITE_URL}/categoria/${category.slug}/page/${numberOfPageCategory}/</loc>
          <lastmod>${category.published_at}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `;
    }
  }

  // TAGS

  const tags = await getAllTags();

  for (let tag of tags) {
    const urlQueryTag = `tags.slug_contains=${tag.slug}`;
    const numberOfPagesTagArray = await createArrayWithNumberOfPosts(
      urlQueryTag,
    );

    for (let numberOfPageTag of numberOfPagesTagArray) {
      sitemap += `
        <url>
          <loc>${SITE_URL}/tag/${tag.slug}/page/${numberOfPageTag}/</loc>
          <lastmod>${tag.published_at}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `;
    }
  }

  // Authors

  const authors = await getAllAuthors();

  sitemap += `
      ${authors
        .map((author) => {
          return `
          <url>
            <loc>${SITE_URL}/autor/${author.slug}/</loc>
            <changefreq>weekly</changefreq>
            <lastmod>${author.published_at}</lastmod>
            <priority>0.7</priority>
          </url>
        `;
        })
        .join('')}
      </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
};

generateSiteMap();

/*

            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
<image:image>
            <image:title>${post.title}</image:title>
            <image:caption>${post.description}</image:caption>
            <image:loc>${post.cover.url}</image:loc>
          </image:image>
          ${post.authors.map((author) => {
            return `
              <image:image>
                <image:title>${author.name}</image:title>
                <image:loc>${author.avatar.url}</image:loc>
                <image:caption>${author.biography}</image:caption>
              </image:image>
              `;
          })}
*/
