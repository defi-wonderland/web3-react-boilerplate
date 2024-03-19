import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';
import { DocumentContext, DocumentProps, Head, Html, Main, NextScript } from 'next/document';

export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
  const descriptionText =
    'Easily bridge between Ethereum Mainnet and any OP Chain in the Superchain ecosystem using the Superchain Bridge by Wonderland.';
  const bannerImage = 'https://superchain-bridge-dev.vercel.app/superchain_banner.jpg';

  return (
    <Html lang='en'>
      <Head>
        <DocumentHeadTags {...props} />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' sizes='48x48' />
        <meta name='description' content={descriptionText} />

        <meta property='og:title' content='Superchain Bridge' />
        <meta property='og:description' content={descriptionText} />
        <meta name='twitter:image' content={bannerImage} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@DeFi_Wonderland' />
        <meta name='twitter:creator' content='@DeFi_Wonderland' />
        <meta name='twitter:title' content='Superchain Bridge' />
        <meta name='twitter:description' content={descriptionText} />

        <meta name='twitter:image' content={bannerImage} />
        <meta name='robots' content='index, follow' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  ) as JSX.Element;
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
