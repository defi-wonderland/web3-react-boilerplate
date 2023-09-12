import { Outlet } from 'react-router-dom';

import { Footer } from '~/containers/Footer';
import { Header } from '~/containers/Header';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
