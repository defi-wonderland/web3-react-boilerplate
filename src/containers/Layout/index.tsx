import { ReactNode, FunctionComponent } from 'react';

import { Header, Footer } from '~/containers';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FunctionComponent<AppLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { AppLayout };
