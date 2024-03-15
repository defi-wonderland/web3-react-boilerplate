import { ReactNode } from 'react';
import { Footer } from '~/containers/Footer';
import { Header } from '~/containers/Header';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
