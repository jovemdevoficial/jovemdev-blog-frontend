import { useEffect } from 'react';

import { Container } from './styled';

import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import php from 'highlight.js/lib/languages/php';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('php', php);

export type PostContainerProps = {
  content: string;
};

// hljs.initHighlightingOnLoad()

export function PostContainer({ content }: PostContainerProps) {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
}
