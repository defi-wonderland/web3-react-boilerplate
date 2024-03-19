import Head from 'next/head';

import { Landing } from '~/containers';

const Home = () => {
  return (
    <>
      <Head>
        <title>Web3 Boilerplate</title>
      </Head>
      <Landing />
    </>
  );
};

export default Home;
