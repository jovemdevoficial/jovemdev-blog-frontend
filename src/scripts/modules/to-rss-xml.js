/* eslint-disable @typescript-eslint/no-var-requires */
const { SITE_NAME, SITE_URL } = require('./environment');

const toRssXML = (posts) => {
  let postXml = '';

  posts.forEach((post) => {
    const date = new Date(post.published_at).toUTCString();

    const href = `${SITE_URL}/posts/${post.slug}/`;

    postXml += `
      <item>
        <title>
          &lt;![CDATA[ ${post.title} ]]&gt;
        </title>
        <description>
          &lt;![CDATA[ ${post.description} ]]&gt;
        </description>
        <link>${href}</link>
        <pubDate>${date}</pubDate>
        <guid isPermaLink="false">${href}</guid>
        <content:encoded />
      </item>
    `;
  });

  return `<?xml version="1.0" ?>
  <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>
      &lt;![CDATA[ ${SITE_NAME} Blog - RSS Feed ]]&gt;
    </title>
    <description>
      &lt;![CDATA[ I'm a software developer &amp; web designer in Colorado Springs, Colorado. I like to explore and write about code, video games, technology, and more. ]]&gt;
    </description>
    <link>${SITE_URL}</link>
    <language>pt-br</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${postXml}
  </channel>
</rss>
  `;
};

module.exports = { toRssXML };
