import { AppProps } from 'next/app';

import Layout from './layout';

import { Providers } from '~/providers';

const Home = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
};

export default Home;
