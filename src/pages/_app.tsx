import { AppProps } from 'next/app';
import { Providers } from '~/providers';
import Layout from './layout';

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
