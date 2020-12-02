import { useEffect } from 'react';

import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import php from 'highlight.js/lib/languages/php';
import bash from 'highlight.js/lib/languages/bash';

import { Container } from './styled';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('php', php);
hljs.registerLanguage('bash', bash);

export type PostContainerProps = {
  content: string;
};

export function PostContainer({ content }: PostContainerProps) {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
}
