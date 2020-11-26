/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'amp-img': any;
  }
}

declare namespace JSX {
  interface AmpImg {
    alt?: string;
    src?: string;
    width?: string;
    height?: string;
    layout?: string;
  }
  interface IntrinsicElements {
    'amp-img': AmpImg;
  }
}
