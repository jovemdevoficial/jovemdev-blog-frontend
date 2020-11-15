import remark from 'remark';
import html from 'remark-html';

export const markdownToHtml = async (markdown: string): Promise<string> => {
  const data = await remark().use(html).process(markdown);
  return String(data.contents);
};
