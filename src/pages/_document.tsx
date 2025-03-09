import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='Portfolio | blog - I am RichardHD, web developer where I will be publishing my knowledge, discoveries and progress of my day to day as a developer.'
        />
        <meta
          name='keywords'
          content='Developer, Portfolio, tecnology, desarrolador, portafolio, tecnologia, web, RichardHD, desarrollador web, RichardHD desarrollador'
        />
        <meta name='author' content='RichardHD' />
        <meta name='og:url' content='../../public/link.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
